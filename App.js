import React from 'react';
import { Icon } from 'react-native-elements';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {StatusBar} from "react-native"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DefaultTheme } from 'react-native-paper';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import { HomeStack } from './Stacks/Home';
import { SettingsStack } from './Stacks/Settings';

const CombinedDarkTheme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4169e1',
    accent: '#4169e1',
    background: '#f1c40f',
    surface: '#1d2238',
    text: 'white',
  },
};

const Tab = createBottomTabNavigator();

function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <StatusBar  barStyle="light-content" translucent={true} />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'lightgray',
            activeBackgroundColor: '#1d2238',
            inactiveBackgroundColor: '#1d2238',
            style: { borderTopWidth: 1, borderTopColor: 'grey', backgroundColor: '#1d2238'},
          }}
          screenOptions={({ route }) => ({
            // unmountOnBlur: true,
            tabBarIcon: ({ focused, size }) => {
              let iconName;
              let color = '#4169e1';
              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-add';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
              return <Icon name={iconName} type="ionicon" color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
