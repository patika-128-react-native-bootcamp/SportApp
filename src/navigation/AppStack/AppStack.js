import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from '../AuthStack';
// import MainTab from '../MainTab';
import NewActivityScreen from '../../Screens/NewActivityScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="NewActivityScreen" component={NewActivityScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
