import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NewActivityScreen from '../../Screens/NewActivityScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NewActivityScreen" component={NewActivityScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
