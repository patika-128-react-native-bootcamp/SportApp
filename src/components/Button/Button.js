import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.styles';

const Button = ({label, onPress, theme = 'primary_button'}) => {
  return (
    <TouchableOpacity style={styles[theme].button_container} onPress={onPress}>
      <Text style={styles[theme].label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
