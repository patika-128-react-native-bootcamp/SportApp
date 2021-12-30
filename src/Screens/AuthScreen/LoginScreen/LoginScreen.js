import React from 'react';
import {Image, SafeAreaView, View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './LoginScreen.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignupNavigation = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.logo}
        source={require('../../../assets/logos/Logo_transparent.png')}
      />
      <View style={styles.input_container}>
        <Input placeholder="Enter your e-mail..." autoFocus />
        <Input placeholder="Enter your password..." />
      </View>
      <View style={styles.button_container}>
        <Button label="Login" onPress={null} />
        <Button
          theme="secondary_button"
          label="Signup"
          onPress={handleSignupNavigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
