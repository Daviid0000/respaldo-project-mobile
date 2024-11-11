import { Pressable, StyleSheet, Text, View } from "react-native";
import { EvilIcons, MaterialCommunityIcons, FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../context/userContext";
import useHoursSpent from "../hooks/useHoursSpent";
import { useFocusEffect } from "expo-router";
import { useTranslation } from 'react-i18next';

const iconLibraries = {
    EvilIcons: EvilIcons,
    MaterialCommunityIcons: MaterialCommunityIcons,
    FontAwesome5: FontAwesome5,
    MaterialIcons: MaterialIcons,
    AntDesign: AntDesign
};

export const CardProfile = ({nameIcon, textCardProfile, NameLibrariIcon, sizeIcon, sizeText, sizePaddingText, showCounter, onPressEnabled, onPress}) => {
  const {t} = useTranslation();
    
    const { user } = useContext(UserContext);
    const IconComponent = iconLibraries[NameLibrariIcon];
    const { hoursSpent, loadHoursSpent, saveHoursSpent, setHoursSpent } = useHoursSpent();

    useEffect(() => {
        loadHoursSpent();
    }, [loadHoursSpent]);

    useEffect(() => {
        if (showCounter) {
                const interval = setInterval(() => {
                    setHoursSpent((prevHours) => {
                        const newHours = prevHours + 1;
                        saveHoursSpent(newHours);
                        return newHours;
                    });
                }, 3600000);

            return () => clearInterval(interval);
        }
    }, [showCounter, setHoursSpent, saveHoursSpent]);


    const CardContent = () => (
        <View style={styleCardProfile.containerCardProfile}>
            <View style={styleCardProfile.subContainerCardProfile}>
            {IconComponent ? (
                    <IconComponent name={nameIcon} size={sizeIcon} color={'#ddd'} />
                ) : (
                    <Text>Icon not found</Text>
                )}
            </View>
            <Text style={[styleCardProfile.textProfile, {fontSize: sizeText, padding: sizePaddingText}]}>
                {textCardProfile}
            </Text> 

            {showCounter && (
                <Text style={styleCardProfile.counterText}>
                    {hoursSpent}
                </Text>
            )}
        </View>
    );
    return onPressEnabled ? (
        <Pressable onPress={onPress}>
          <CardContent />
        </Pressable>
      ) : (
        <CardContent />
      );
}



const styleCardProfile = StyleSheet.create({

    containerCardProfile: {
        height: 150, 
        width: 130, 
        backgroundColor: '#111762',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center'
    },

    subContainerCardProfile: {
        height: 55, 
        width: 120, 
        backgroundColor: '#4d55b3',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        top: -5
    },
    textProfile: {
        color: '#ddd',
        textAlign: 'center',
    },

    counterText: {
        color: '#ddd',
        textAlign: 'center',
        fontSize: 20
    }

})