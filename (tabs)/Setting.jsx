import React from 'react';
import { Text, TextInput, View } from 'react-native';
import {Button} from '@rneui/themed'
import  MyStagger  from '@/components/StaggerButtons';
import { router, Stack } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const Setting = () => {
  const {t} = useTranslation();

  return (
    <>
    <Stack.Screen options={{
                title: '  Olvidé mi contraseña',
                headerShown: true,
                headerBackTitleVisible: true,
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#10132F' },
                headerLeft: () => (
                    <AntDesign name='arrowleft' onPress={() => router.push('Login')} size={22} color={'#ddd'} style={{ paddingLeft: 10 }} />
                ),
            }} />
    <View style={{height: '100%', backgroundColor: '#10132F', paddingTop: 30}}>
      <Text style={{textAlign: 'center', color: '#ddd'}}>Enviaremos un enlace a tu email para para que cambies tu contraseña</Text>
      <TextInput placeholder='Email' style={{borderWidth: 1, borderRadius: 5, padding: 10, margin: 10, borderColor: '#ddd'}} placeholderTextColor={'#ddd'} />
      <View style={{alignItems:'center'}}>
        <Button
          buttonStyle={{ paddingHorizontal: 15, borderRadius: 5, width: 120, height: 35, margin: 10 }}
          color={'#149'}
        >
          <Text style={{color: '#fff', fontSize: 17}}>ENVIAR</Text>
        </Button>
      </View>
    </View>
      <MyStagger />
    </>
  );
};

export default Setting;
