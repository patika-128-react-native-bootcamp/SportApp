import React from 'react';
import {TextInput} from 'react-native';

import styles from './Input.styles';

const Input = ({...props}) => {
  return (
    <TextInput
      style={styles.input}
      autoCorrect={false}
      autoCapitalize="none"
      {...props}
    />
  );
};

export default Input;
