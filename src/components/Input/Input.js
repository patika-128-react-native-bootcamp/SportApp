import React from 'react';
import {TextInput} from 'react-native';

import styles from './Input.styles';

const Input = ({isSecure, ...props}) => {
  return (
    <TextInput
      secureTextEntry={isSecure}
      style={styles.input}
      autoCorrect={false}
      autoCapitalize="none"
      {...props}
    />
  );
};

export default Input;
