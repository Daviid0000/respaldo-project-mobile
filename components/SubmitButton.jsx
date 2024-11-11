import React from 'react';
import { Button } from '@rneui/base';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const SubmitButton = ({ handleSubmit, errorMessage, titleButton }) => {
  const {t} = useTranslation();
  
  return(
  <>
    <Button
      buttonStyle={{ borderRadius: 10, width: 240, margin: 'auto',  }}
      title={titleButton}
      onPress={handleSubmit}
    />
    {errorMessage && (
      <View style={{ alignItems: 'center', flexDirection: 'row'}}>
        <MaterialIcons name="error" size={24} color="red" />
        <Text style={{ color: 'red', marginLeft: 5 }}>{errorMessage}</Text>
      </View>
    )}
  </>
)};

export default SubmitButton;
