import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../Screens/HomeScreen';
import { DetailsScreen } from '../Screens/DetailsScreen';

const HomeNav = createStackNavigator();

export const HomeStack = (navigation) => {
  return (
    <HomeNav.Navigator>
      <HomeNav.Screen
        name="Home"
        component={HomeScreen}
        navigation = {navigation}
        options={{ headerShown: false }}
      />
      <HomeNav.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </HomeNav.Navigator>
  );
};
