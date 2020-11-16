import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { Dashboard } from './Components/dashboard';
import {
  DefaultTheme,
  Surface,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { Button, FAB } from 'react-native-paper';

const CombinedDarkTheme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#4169e1',
    background: '#f1c40f',
    surface: '#1d2238',
    text: 'white',
  },
};

const styles = StyleSheet.create({
  home: {
    marginHorizontal: 2,
  },
  fab: {
    position: 'absolute',
    margin: 8,
    right: 0,
    bottom: 0,
  },
  titleCard: {
    height: 90,
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
      <SafeAreaView style={styles.home}>
        <Card style={styles.titleCard}>
          <Card.Title
            titleStyle={{ color: 'white' }}
            title="FX rate feed UK"
            subtitle="Last Updated @"
          />

          <Card.Content>
            <FAB
              style={styles.fab}
              large
              icon="update"
              loading={this.state.loading}
              onPress={() => this.updateFeed()}
            />
          </Card.Content>
        </Card>

        <ScrollView style={styles.home}>
          {/* <Dashboard from={'USD'} to={'JPY'} toggle={this.state.updateToggle} /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const Stack = createStackNavigator();

function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
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
