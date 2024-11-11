import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Animated } from "react-native";
import { router } from "expo-router";
import { AntDesign, EvilIcons, MaterialCommunityIcons, MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const iconLibraries = {
  EvilIcons: EvilIcons,
  MaterialCommunityIcons: MaterialCommunityIcons,
  FontAwesome5: FontAwesome5,
  MaterialIcons: MaterialIcons,
  AntDesign: AntDesign,
  Entypo: Entypo
};

const MyCard = ({ title, subtitle, image, window, NameLibrariIcon, nameIcon, sizeIcon }) => {
  const {t} = useTranslation();

  const [isPressed, setIsPressed] = useState(false);
  const [scale] = useState(new Animated.Value(1)); 
  const [opacity] = useState(new Animated.Value(0));

  const IconComponent = iconLibraries[NameLibrariIcon];

  // Función para manejar el presionado largo
  const handlePressIn = () => {
    setIsPressed(true);
    // Animar la opacidad del backdrop
    Animated.timing(opacity, {
      toValue: 1,  // Mostrar el backdrop
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(scale, {
      toValue: 1.05,  // Aumentar el tamaño de la tarjeta un 5%
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Función para manejar cuando se suelta el toque
  const handlePressOut = () => {
    setIsPressed(false);
    // Animar la opacidad del backdrop para que desaparezca
    Animated.timing(opacity, {
      toValue: 0,  // Ocultar el backdrop
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(scale, {
      toValue: 1,  // Volver al tamaño original
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
      <Pressable
        style={{ alignItems: 'center' }}
        onPressIn={handlePressIn}  // Se ejecuta cuando el toque comienza
        onPressOut={handlePressOut} // Se ejecuta cuando el toque termina
        onPress={() => router.push(window)}
      >
    <Animated.View style={[styles.container, {transform: [{scale: scale}]}]}>
        {IconComponent ? (
          <IconComponent name={nameIcon} size={sizeIcon} color={'#ddd'} />
        ) : (
          <Text>Icon not found</Text>
        )}

      {/* Backdrop animado */}
      {isPressed && (
        <Animated.View style={[styles.backdrop, { opacity }]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </Animated.View>
      )}

      {/* Imagen (si la necesitas en el fondo) */}
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </Animated.View>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: '#111762',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    margin: 'auto',
    // Sombra para iOS
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    // Sombra para Android
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 250,
    height: 190,
    borderRadius: 5,
    position: 'absolute',  // Esto puede ayudar a que la imagen esté en el fondo
    top: 0,
    left: 0,
  },
  icon: {
    position: 'absolute',
    top: 165,
    backgroundColor: '#99999999',
    borderRadius: 50,
    padding: 5,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,  // Esto hace que el backdrop cubra toda la tarjeta
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },

});

export default MyCard;
