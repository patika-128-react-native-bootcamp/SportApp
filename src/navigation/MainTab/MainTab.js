import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import NewActivityScreen from '../../Screens/NewActivityScreen';
import DashboardScreen from '../../Screens/DashboardScreen';
import DetailStack from '../DetailStack';
import LeaderboardScreen from '../../Screens/LeaderboardScreen';
import styles from './MainTab.styles';
import colors from '../../styles/colors';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopColor: colors.primary,
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
        tabBarInactiveTintColor: colors.secondary,
        headerTintColor: colors.secondary,
        headerRight: () => (
          <Icon
            name="exit-to-app"
            size={24}
            onPress={() => auth().signOut()}
            color={colors.secondary}
            style={styles.exit_icon}
          />
        ),
      }}>
      <Tab.Screen
        name="NewActivityScreen"
        component={NewActivityScreen}
        options={{
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.black,
          title: 'New Activity',
          tabBarLabel: 'New Activity',
          tabBarIcon: ({focused}) => (
            <Icon
              name="run"
              size={24}
              color={focused ? colors.secondary : colors.black}
            />
          ),
          headerBackgroundContainerStyle: {backgroundColor: colors.primary},
        }}
      />
      <Tab.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.black,
          title: 'Dashboard',
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused}) => (
            <Icon
              name="view-dashboard"
              size={24}
              color={focused ? colors.secondary : colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DetailStack"
        component={DetailStack}
        options={{
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.black,
          title: 'Past Activities',
          tabBarLabel: 'Past Activities',
          tabBarIcon: ({focused}) => (
            <Icon
              name="history"
              size={24}
              color={focused ? colors.secondary : colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
        options={{
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.black,
          title: 'Leaderboard',
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({focused}) => (
            <Icon
              name="timer-outline"
              size={24}
              color={focused ? colors.secondary : colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
