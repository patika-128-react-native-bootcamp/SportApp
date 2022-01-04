import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PastActivitiesScreen from '../../Screens/PastActivityScreen';
import ActivityDetailScreen from '../../Screens/ActivityDetailScreen';

const Stack = createNativeStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="PastActivitiesScreen"
        component={PastActivitiesScreen}
      />
      <Stack.Screen
        name="ActivityDetailScreen"
        component={ActivityDetailScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default DetailStack;
