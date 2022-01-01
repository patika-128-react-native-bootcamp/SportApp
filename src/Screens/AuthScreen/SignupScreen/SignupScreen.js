import React from 'react';
import {Image, SafeAreaView, View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

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

  const handleLoginNavigation = () => {
    navigation.navigate('LoginScreen');
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
              placeholder="Enter your name and surname..."
              onChangeTest={handleChange('fullname')}
              value={values.fullname}
            />
            <Input
              autoFocus
              placeholder="Enter your name and surname..."
              onChangeTest={handleChange('age')}
              value={values.age}
            />
            <Input
              autoFocus
              placeholder="Enter your name and surname..."
              onChangeTest={handleChange('weight')}
              value={values.weight}
            />
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
            <Input
              isSecure
              placeholder="Enter your password again..."
              onChangeTest={handleChange('repassword')}
              value={values.repassword}
            />
            <Button label="Signup" onPress={null} />
            <Button
              theme="secondary_button"
              label="Go Back To Login"
              onPress={handleLoginNavigation}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignupScreen;
