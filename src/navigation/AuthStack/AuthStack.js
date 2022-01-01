import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../../Screens/AuthScreen/LoginScreen';
import SignupScreen from '../../Screens/AuthScreen/SignupScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
