import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from '../AuthStack';
// import MainTab from '../MainTab';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      {/* <Stack.Screen name="MainTab" component={MainTab} /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
