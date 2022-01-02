import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import AppStack from './AppStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AppStack />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Navigation;
