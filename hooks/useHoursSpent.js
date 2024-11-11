import { useState, useCallback, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../context/userContext';

const useHoursSpent = () => {
    const { user } = useContext(UserContext);
    const [hoursSpent, setHoursSpent] = useState(0);

    const loadHoursSpent = useCallback(async () => {
            if (!user.name) return;
            try {
                const savedHours = await AsyncStorage.getItem(`@hours_${user.name}`);
                console.log('Horas dentro de la app: ', savedHours);
                if (savedHours !== null) {
                    setHoursSpent(parseInt(savedHours));
                }
            } catch (e) {
                console.log('Error al cargar horas dedicadas:', e);
            }
    }, []);

    const saveHoursSpent = useCallback(async (newHours) => {
        try {
            await AsyncStorage.setItem(`@hours_${user.name}`, newHours.toString());
            console.log('Horas actuales guardadas:', newHours);
        } catch (e) {
            console.log('Error al guardar horas dedicadas:', e);
        }
    }, [user.name]);


    return { hoursSpent, loadHoursSpent, saveHoursSpent, setHoursSpent };
};

export default useHoursSpent;
