import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import AppStack from './AppStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Navigation;
