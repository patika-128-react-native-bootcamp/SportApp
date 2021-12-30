import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignupNavigation = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <SafeAreaView>
      <Text>Login Screen Sport App</Text>
      <Button onPress={handleSignupNavigation} title="Go to Signup" />
    </SafeAreaView>
  );
};

export default LoginScreen;
