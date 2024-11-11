import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { UserContext } from '@/context/userContext';
import { useContext } from 'react';
import  {ShowDrawer}  from './showDrawer';
import { useTranslation } from 'react-i18next';

export const ActionButtons = () => {
  const {t} = useTranslation();

  const { setIsLoggedIn, user } = useContext(UserContext);
  const { mostrar } = ShowDrawer();
  const clearAsyncStorage = async () => {

    try {
      const profileImageKey = `profileImage_${user.id}`
      const profileImage = await AsyncStorage.getItem(profileImageKey); 
      await AsyncStorage.clear();

      if (profileImage) {
        await AsyncStorage.setItem(profileImageKey, profileImage); 
      }
  
      console.log("Avatar guardado en el AsyncStorage: ", profileImage);
  
      setIsLoggedIn(false);
      router.push("/");
      mostrar("cerrar");
  
    } catch (error) {
      console.error('Error al vaciar AsyncStorage:', error);
    }
  };
  
  const checkAsyncStorage = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');

      console.log('userToken:', userToken || 'No hay userToken almacenado.');
      console.log('isLoggedIn:', isLoggedIn || 'No hay estado de sesión (isLoggedIn) almacenado.');
    } catch (error) {
      console.log('Error obteniendo los datos del AsyncStorage:', error);
    }
  };

  return {
    clearAsyncStorage,
    checkAsyncStorage,
  }
};

export default ActionButtons
