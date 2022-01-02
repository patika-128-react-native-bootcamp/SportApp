import React, {useState} from 'react';
import {Image, SafeAreaView, StatusBar, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import styles from './LoginScreen.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LoginValidator from './ValidationSchema';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
// import useFetch from '../../../hooks/useFetch';

const initialFormValues = {
  email: '',
  password: '',
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async formValues => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      showMessage({
        message: 'Login Successful',
        type: 'success',
      });
      navigation.navigate('NewActivityScreen');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
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
        initialValues={initialFormValues}
        onSubmit={handleLoginSubmit}
        validationSchema={LoginValidator}
        validateOnBlur={false}
        validateOnChange={false}>
        {({handleChange, values, handleSubmit, errors, touched}) => (
          <>
            <Input
              autoFocus
              placeholder="Enter your e-mail..."
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <Text style={styles.error}> {errors.email}</Text>
            ) : null}
            <Input
              isSecure
              placeholder="Enter your password..."
              onChangeText={handleChange('password')}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <Text style={styles.error}>{errors.password}</Text>
            ) : null}
            <Button label="Login" onPress={handleSubmit} loading={loading} />
            <Button
              theme="secondary_button"
              label="Signup"
              onPress={handleSignupNavigation}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;
