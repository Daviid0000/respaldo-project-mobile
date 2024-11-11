import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

export const FormInput = ({ placeholder, value, setValue, secureTextEntry, validation, errorMessage, iconName, IconComponent }) => {
  const {t} = useTranslation();
 
  const isValid = validation(value);
  

  return (
    <View style={styles.inputContainer}>
      {/* View que contiene el input y el ícono */}
      <View style={styles.inputWrapper}>
        <IconComponent
          name={iconName}
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </View>

      {/* Mensaje de error */}
      <View style={styles.errorContainer}>
        {!isValid && value.length > 0 && (
            <View style={{flexDirection:'row', alignItems: 'center'}}>
                <MaterialIcons name="error" size={24} color="red" />
                <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  inputWrapper: {
    position: 'relative',
    width: 250,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 12, 
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 40,
    paddingRight: 10,
  },
  errorContainer: {
    minHeight: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
