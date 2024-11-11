import { ScrollView, TextInput, View, Text} from 'react-native'
import { router, Stack } from 'expo-router'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRef, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const Chat = () => {
  const {t} = useTranslation();

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([])
    const scrollViewRef = useRef(null);

    useEffect(() => {
        const fetchChatHistory = async () => {
          try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_HOST}/chat-history`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': true
              },
            });
    
            if (response.ok) {
              const data = await response.json();
              const formattedMessages = data.map((msg) => ({
                type: msg.sender === 'user' ? 'user' : 'bot',
                text: msg.message,
              }));
              setMessages(formattedMessages);
            } else {
              throw new Error('Error al recuperar el historial del chat');
            }
          } catch (error) {
            console.error('Error al obtener el historial del chat:', error);
          }
        };
    
        fetchChatHistory();
      }, []);

      useEffect(() => {
        scrollToBottom();
      }, [messages]);

      const scrollToBottom = () => {
        scrollViewRef.current?.scrollToEnd({ animated: true })
      };

    const handleSubmit = async () => {
        if (input.trim() === '') return;
    
        setMessages([...messages, { type: 'user', text: input }]);
        setInput('');
    
        try {
          const token = AsyncStorage.getItem('userToken')
          const userId = AsyncStorage.getItem('userId')

          const response = await fetch(`${process.env.EXPO_PUBLIC_HOST}/ask`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': true
            },
            body: JSON.stringify({ question: input, userId: userId })
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setMessages((prevMessages) => [
              ...prevMessages,
              { type: 'bot', text: data.response }
            ]);
          } else {
            throw new Error('Error en la respuesta');
          }
        } catch (error) {
          console.error('Error en la petición:', error);

          setMessages((prevMessages) => [
            ...prevMessages, 
            {   type: 'bot', 
                text: 'Ocurrió un error'
            },
          ]);

        }
      };

    return (
    <View style={{ flex: 1, backgroundColor: '#10132F' }}>
      <Stack.Screen 
                options={{ 
                    title: 'Tutor Gauss', 
                    headerShown: true,
                    headerStyle: { 
                        backgroundColor: '#10132F' 
                    },
                    headerTintColor: '#ddd',
                    headerLeft: () => (
                        <AntDesign name="arrowleft" size={22} color={'#ddd'} onPress={() => router.push('explore')} style={{ paddingLeft: 20 }} />
                    )
                }}
            />
      <ScrollView ref={scrollViewRef} style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          {messages.map((message, index) => (
            <Text
              key={index}
              style={{
                color: message.type === 'user' ? '#ddd' : '#fff',
                backgroundColor: message.type === 'user' ? '#333' : '#444',
                padding: 10,
                borderRadius: 5,
                marginBottom: 10,
                alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              {message.text}
            </Text>
          ))}
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            backgroundColor: '#225',
            borderColor: '#ddd',
            color: '#ddd',
            flex: 1,
            marginRight: 10,
          }}
          value={input}
          onChangeText={setInput}
          placeholder={t('Write')}
          placeholderTextColor='#666'
        />
        <Ionicons
          name='send'
          size={24}
          color='#ddd'
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};


export default Chat;
