import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Dashboard } from './Components/dashboard';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

const styles = StyleSheet.create({
  home: {
    marginHorizontal: 10,
    marginHorizontal: 4,
  },
});

function HomeScreen() {
  return (
    <ScrollView style={styles.home}>
      <Dashboard from={'USD'} to={'JPY'} />
      <Dashboard from={'GBP'} to={'USD'} />
      <Dashboard from={'GBP'} to={'USD'} />
      <Dashboard from={'GBP'} to={'USD'} />
    </ScrollView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="FX" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
