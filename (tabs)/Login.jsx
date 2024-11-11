import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { StylesLogin } from '@/components/Styles';
import { FormInput } from '../../components/FormInput';
import userLoginForm from '../../hooks/userLoginForm';
import SubmitButton from '../../components/SubmitButton';
import { SocialButtons2 } from '../../components/SocialButtons';
import { Checkbox2 } from '../../components/CheckBoxs';
import { useTranslation } from 'react-i18next';

 const Login = () => {
  const {t} = useTranslation();

  const image1 = require('@/img/login.png')
  
  const { email, 
          setEmail, 
          pass, 
          setPass, 
          errorMessage, 
          loginUser,
          isChecked,
          setIsChecked
  } = userLoginForm();

  return (
    <>

      <ScrollView>
        <View style={StylesLogin.container}>
        <Stack.Screen options={{headerShown:false}}  />
          <Image source={image1}  style={{width: 270, height: 350, maxHeight: 'auto', maxWidth: 'auto', top: 45}}/>

          <View style={{backgroundColor:'#fff', width: '113%', borderRadius:15, padding: 55, top: 45, alignItems: 'center'}}>
              
              <Text style={{fontSize: 35, marginVertical: 20, textAlign: 'center'}}>Stats Academy</Text>
              <FormInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
                validation={() => true}
                IconComponent={MaterialIcons}
                iconName="email"
              />

              <FormInput
                placeholder="Contraseña"
                value={pass}
                setValue={setPass}
                validation={() => true}
                IconComponent={MaterialIcons}
                iconName="password"
                secureTextEntry
              />
              <SubmitButton handleSubmit={loginUser} errorMessage={errorMessage} titleButton={'LOGIN'} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Checkbox2 title={'Recúerdame'} isChecked={isChecked} setIsChecked={setIsChecked} />
                <Text style={{color:'#00f'}} onPress={() => router.push("Setting")}>Olvidé mi contraseña</Text>
              </View>
              
              <SocialButtons2 />

          </View>
          
        </View>
      </ScrollView>
    </>
  );
}

export default Login