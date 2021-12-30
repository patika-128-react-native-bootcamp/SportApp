import React from 'react';
import {Image, SafeAreaView, View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

import styles from './LoginScreen.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LoginValidator from './ValidationSchema';
// import useFetch from '../../../hooks/useFetch';

const initialValues = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const navigation = useNavigation();
  // const {loading, error} = useFetch();

  const handleLogin = async formValues => {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      navigation.navigate(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignupNavigation = () => {
    navigation.navigate('SignupScreen');
  };

  // if (loading) {
  //   return <ActivityIndicator size={30} />;
  // }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.logo}
        source={require('../../../assets/logos/Logo_transparent.png')}
      />
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={LoginValidator}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.input_container}>
            <Input
              autoFocus
              placeholder="Enter your e-mail..."
              onChangeTest={handleChange('email')}
              value={values.email}
            />
            <Input
              isSecure
              placeholder="Enter your password..."
              onChangeTest={handleChange('password')}
              value={values.password}
            />
            <Button label="Login" onPress={null} />
            <Button
              theme="secondary_button"
              label="Signup"
              onPress={handleSignupNavigation}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;
