import React from 'react';
import {Image, SafeAreaView, StatusBar, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import styles from './SignupScreen.styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LoginValidator from './ValidationSchema';
// import useFetch from '../../../hooks/useFetch';

const initialValues = {
  fullname: '',
  age: '',
  weight: '',
  email: '',
  password: '',
  repassword: '',
};

const SignupScreen = () => {
  const navigation = useNavigation();
  // const {loading, error} = useFetch();

  const handleLoginNavigation = () => {
    navigation.navigate('LoginScreen');
  };

  const handleSignupSubmit = async formValues => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Passwords Do Not Match',
        type: 'warning',
      });
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.repassword,
      );
      showMessage({
        message: 'User Successfully Created',
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
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
        onSubmit={handleSignupSubmit}
        validationSchema={LoginValidator}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <>
            <Input
              autoFocus
              placeholder="Enter Your Name And Surname..."
              onChangeText={handleChange('fullname')}
              value={values.fullname}
            />
            {errors.fullname && touched.fullname ? (
              <Text style={styles.error}> {errors.fullname}</Text>
            ) : null}
            <Input
              placeholder="Enter Your Age..."
              onChangeText={handleChange('age')}
              value={values.age}
            />
            {errors.age && touched.age ? (
              <Text style={styles.error}> {errors.age}</Text>
            ) : null}
            <Input
              placeholder="Enter Your Weight..."
              onChangeText={handleChange('weight')}
              value={values.weight}
            />
            {errors.weight && touched.weight ? (
              <Text style={styles.error}> {errors.weight}</Text>
            ) : null}
            <Input
              placeholder="Enter your e-mail..."
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <Text style={styles.error}> {errors.email}</Text>
            ) : null}
            <Input
              placeholder="Enter your password..."
              onChangeText={handleChange('password')}
              value={values.password}
              isSecure
            />
            {errors.password && touched.password ? (
              <Text style={styles.error}> {errors.password}</Text>
            ) : null}
            <Input
              placeholder="Enter your password again..."
              onChangeText={handleChange('repassword')}
              value={values.repassword}
              isSecure
            />
            {errors.repassword && touched.repassword ? (
              <Text style={styles.error}> {errors.repassword}</Text>
            ) : null}
            <Button label="Signup" onPress={handleSubmit} />
            <Button
              theme="secondary_button"
              label="Go Back To Login"
              onPress={handleLoginNavigation}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignupScreen;
