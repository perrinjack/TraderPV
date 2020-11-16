import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Icon } from 'react-native-elements';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Dashboard } from './Components/dashboard';
import { MockDashboard } from './Components/mockDashboard';
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
  topbackdrop: {
    backgroundColor: '#1d2238',
  },
  backdrop: {
    backgroundColor: 'lightgray',
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
      <SafeAreaView style={styles.topbackdrop}>
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
          <MockDashboard />
          <MockDashboard />
          <MockDashboard />
          <MockDashboard />
          <MockDashboard />
          <MockDashboard />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const HomeStack = () => {
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

const SettingsStack = () => {
  return <Text>Hello</Text>;
};

const Tab = createBottomTabNavigator();
const HomeNav = createStackNavigator();

function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={'Home'}
          tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'lightgray',
            activeBackgroundColor: '#1d2238',
            inactiveBackgroundColor: '#1d2238',
            style: {},
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
              let iconName;
              let color = '#3498db';
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
