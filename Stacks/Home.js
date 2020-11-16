import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../Screens/HomeScreen';

const HomeNav = createStackNavigator();

export const HomeStack = () => {
  return (
    <HomeNav.Navigator>
      <HomeNav.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeNav.Navigator>
  );
};
