import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '@/context/userContext';

const useAuth = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!token); // Verifica si hay un token
      setLoading(false);
    };

    checkLoginStatus();
  }, [setIsLoggedIn]);

  return { loading, isLoggedIn };
};

export default useAuth;
