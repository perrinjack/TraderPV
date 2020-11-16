import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Dashboard } from './Components/dashboard';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { Button, FAB } from 'react-native-paper';

const styles = StyleSheet.create({
  home: {
    marginHorizontal: 10,
    marginVertical: 40,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateToggle: false,
      loading: false,
    };
  }

  updateFeed() {
    this.setState({ loading: true });
    this.setState({ updateToggle: !this.state.updateToggle });
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <ScrollView style={styles.home}>
        <Dashboard from={'USD'} to={'JPY'} toggle={this.state.updateToggle} />
        <FAB
          style={styles.fab}
          large
          icon="update"
          loading={this.state.loading}
          onPress={() => this.updateFeed()}
        />
      </ScrollView>
    );
  }
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
