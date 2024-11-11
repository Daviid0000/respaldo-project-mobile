import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerComponent from './DateTimePickerComponent';
import { useTranslation } from 'react-i18next';

const CreatorEvent = ({ selected, setShowCreatorEvent, setEvents, setSelected, addEvent }) => {
    const {t} = useTranslation();

    const [descriptionEvent, setDescriptionEvent] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);

    const handleSubmitEvent = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            console.log("token de usuario: ", token)
            const response = await fetch(`${process.env.EXPO_PUBLIC_HOST}/calendarEvent/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'ngrok-skip-browser-warning': true
                },
                body: JSON.stringify({ date: selected, event: descriptionEvent })
            });


            if (!response.ok) {
                throw new Error("Error al crear el evento");
            }
            
            const data = await response.json()
            console.log(data.event);
            
            addEvent(data.event)
            setDescriptionEvent('');
            setSelected(''); 
            setShowCreatorEvent(false);

        } catch (error) {
            console.error("Error en el servidor:", error);
        }
    };

        const handleDateChange = (selectedDate) => {
            if (selectedDate) {
                setDate(selectedDate);
                const day = selectedDate.getDate();
                const month = selectedDate.getMonth() + 1;
                const year = selectedDate.getFullYear();
                const formatted = `${year}/${month}/${day}`;
                setSelected(formatted);
                setShowDate(false);
            } else {
                setShowDate(false);
            }
        }
        
        return (
            <KeyboardAvoidingView>
            <View style={{ borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, backgroundColor: '#64a', borderColor: '#ddd', position: 'absolute', alignItems: 'flex-end', justifyContent: 'center', width: 250, height: 220, zIndex: 20, top: -400, left: -130, gap: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <Text style={{ color: '#ddd', fontWeight: 'bold', fontSize: 17 }}>
                        {t('Modal-title')}
                    </Text>
                    <Ionicons name='close' size={22} color={'#ddd'} onPress={() => {
                        setShowCreatorEvent(false);
                        setDescriptionEvent('');
                        setSelected('');
                    }} />
                </View>
                    
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 65 }}>
                    <Text style={{ color: '#ddd', fontSize: 17, borderBottomWidth: 1, borderColor: '#ddd', padding: 5 }}>
                        {selected ? `${t('Date')}: ${selected}` : `${t('Select-date')}`}
                    </Text>
                    <Pressable onPress={() => setShowDate(!showDate)} android_ripple={{ color: 'rgba(0, 255, 255, 0.2)', borderless: false, radius: 150 }}>
                        <Ionicons name='calendar' size={22} color={'#ddd'} />
                    </Pressable>
                </View>

                { showDate && (
                    <DateTimePickerComponent 
                        date={date}
                        onChangeDate={handleDateChange}
                        setShowDate={setShowDate}
                        
                    />
                    )
                }

                <TextInput placeholder={t('Input-event')} style={{ borderWidth: 1, borderRadius: 5, borderColor: '#ddd', padding: 10, color: '#ddd', width: '100%' }} placeholderTextColor={'#ddd'} value={descriptionEvent} onChangeText={text => setDescriptionEvent(text)} />
                <Pressable style={{ borderWidth: 1, borderRadius: 5, padding: 10, borderColor: '#ddd', width: '100%' }} onPress={handleSubmitEvent} android_ripple={{ color: 'rgba(0, 255, 255, 0.2)', borderless: false, radius: 150 }}>
                    <Text style={{ color: '#ddd', textAlign: 'center' }}>
                        {t('Button-save')}
                    </Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
};

export default CreatorEvent;

