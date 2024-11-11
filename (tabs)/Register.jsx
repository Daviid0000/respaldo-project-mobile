import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { Stack } from 'expo-router';
import { StylesLogin } from '../../components/Styles';
import { FormInput } from '../../components/FormInput';
import SubmitButton from '../../components/SubmitButton';
import { Checkbox1 } from '../../components/CheckBoxs';
import { SocialButtons } from '../../components/SocialButtons';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRegisterForm } from '../../hooks/userRegisterForm';
import { validateEmail, validatePassword, validateUsername } from '../../components/validation';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const {t} = useTranslation();

  const {
    userCreate,
    setUserCreate,
    emailCreate,
    setEmailCreate,
    passCreate,
    setPassCreate,
    isChecked,
    setIsChecked,
    errorMessage,
    handleSubmit,
  } = useRegisterForm();

  return (
    <ScrollView>
      <View style={StylesLogin.container}>
        <Stack.Screen options={{ headerShown: false }} />
        <Image source={require('@/img/login.png')} style={{ width: 270, height: 350, maxHeight: 'auto', maxWidth: 'auto', top: 30}} />
        
        <View style={{ backgroundColor: '#fff', borderRadius: 15, padding: 55, top: 30, width: '113%', alignItems: 'center'}}>
          <Text style={{fontSize: 35, marginVertical: 20, textAlign: 'center'}}>Stats Academy</Text>

          <FormInput
            placeholder="Usuario"
            value={userCreate}
            setValue={setUserCreate}
            validation={validateUsername}
            errorMessage="El nombre de usuario debe ser mínimo de 4 caracteres"
            IconComponent={Feather}
            iconName="user"
          />

          <FormInput
            placeholder="Email"
            value={emailCreate}
            setValue={setEmailCreate}
            validation={validateEmail}
            errorMessage="Formato de email inválido"
            IconComponent={MaterialIcons}
            iconName="email"
          />

          <FormInput
            placeholder="Contraseña"
            value={passCreate}
            setValue={setPassCreate}
            secureTextEntry
            validation={validatePassword}
            errorMessage="La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas y un número"
            IconComponent={MaterialIcons}
            iconName="password"
          />

          <SubmitButton handleSubmit={handleSubmit} errorMessage={errorMessage} titleButton={'REGISTER'} />
          <Checkbox1 isChecked={isChecked} setIsChecked={setIsChecked} />
          <SocialButtons />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
