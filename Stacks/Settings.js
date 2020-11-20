import React from 'react';
import { List } from 'react-native-paper';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  FlatList,
  RefreshControl,
  Switch,
} from 'react-native';

import { MockDashboard } from '../Components/mockDashboard';
import { Dashboard } from '../Components/dashboard';
import { Card, Button } from 'react-native-paper';

export const SettingsStack = () => {
  return (
    <SafeAreaView style={styles.topbackdrop}>
      <Card style={styles.titleCard}>
        <Card.Title
          titleStyle={{ color: 'white' }}
          title="Settings "
          subtitle="Personalise your app here!"
        />
      </Card>
      <ScrollView>
        <List.Section>
          <List.Subheader>FX Pairs Displayed</List.Subheader>

          <List.Item
            style={styles.list}
            title="USD / JPY"
            description="United States Dollar / Japanese Yen"
            left={(props) => <Button mode="text">£ / $ </Button>}
            right={(props) => (
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                value={true}
              />
            )}
          />
          <List.Item
            style={styles.list}
            title="EUR / JPY"
            description="Euro / Japanese Yen"
            left={(props) => <Button mode="text">€ / $ </Button>}
            right={(props) => (
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                value={true}
              />
            )}
          />
          <List.Item
            style={styles.list}
            title="USD / GBP"
            description="United States Dollar / Great British Pound"
            left={(props) => <Button mode="text">£ / $ </Button>}
            right={(props) => (
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                value={true}
              />
            )}
          />
        </List.Section>

        <List.Section>
          <List.Subheader>Crypto Pairs Displayed</List.Subheader>

          <List.Item
            style={styles.list}
            title="USD / BTC"
            description="United States Dollar / Bitcoin"
            left={(props) => <Button mode="text">$ / BTC </Button>}
            right={(props) => (
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                value={true}
              />
            )}
          />
          <List.Item
            style={styles.list}
            title="GBP / BTC"
            description="Great British Pound / Bitcoin"
            left={(props) => <Button mode="text">£ / BTC </Button>}
            right={(props) => (
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                value={true}
              />
            )}
          />
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleCard: {},
  topbackdrop: {
    backgroundColor: '#1d2238',
    flex: 1,
  },
  list: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});
