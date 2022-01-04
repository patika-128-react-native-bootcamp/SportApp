import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import AuthStack from '../AuthStack';
import MainTab from '../MainTab';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [userSession, setUserSession] = useState();
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!userSession ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{
            gestureEnabled: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
