import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './Button.styles';

const Button = ({label, theme = 'primary_button', ...props}) => {
  return (
    <TouchableOpacity style={styles[theme].button_container} {...props}>
      <Text style={styles[theme].label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
