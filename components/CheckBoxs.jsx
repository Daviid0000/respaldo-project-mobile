import React from 'react';
import { CheckBox } from '@rneui/base';
import { useTranslation } from 'react-i18next';

const {t} = useTranslation();

export const Checkbox1 = ({ isChecked, setIsChecked }) => 
  (
  <CheckBox
    title="Términos y Condiciones"
    checked={isChecked}
    onPress={() => setIsChecked(!isChecked)}
  />
);

export const Checkbox2 = ({ isChecked, setIsChecked }) => (
  <CheckBox
    title="Recúerdame"
    checked={isChecked}
    onPress={() => setIsChecked(!isChecked)}
  />
);

