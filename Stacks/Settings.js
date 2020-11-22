import React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet, View, SafeAreaView, FlatList, Switch } from 'react-native';

import { Card, Button } from 'react-native-paper';
import DATA from '../Components/pairs.json';

export const SettingsStack = () => {
  return <SettingsScreen />;
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

export class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => {
    return (
      <List.Item
        style={styles.list}
        title={`${item.from} / ${item.to}`}
        description="United States Dollar / Japanese Yen"
        left={(props) => <Button mode="text">£ / $ </Button>}
        right={(props) => (
          <Switch
            trackColor={{ false: '#767577', true: '#767577' }}
            thumbColor={item.shown ? 'green' : 'red'}
            ios_backgroundColor="#767577"
            // onValueChange={toggleSwitch}
            value={item.shown}
          />
        )}
      />
    );
  };

  renderHeader = ({ item }) => {
    return <List.Subheader>FX Pairs Displayed</List.Subheader>;
  };

  render() {
    return (
      <SafeAreaView style={styles.topbackdrop}>
        <Card style={styles.titleCard}>
          <Card.Title
            titleStyle={{ color: 'white' }}
            title="Settings "
            subtitle="Personalise your app here!"
          />
        </Card>
        <View>
          <List.Section>
            <FlatList
              ListHeaderComponent={this.renderHeader}
              data={DATA}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          </List.Section>
        </View>
      </SafeAreaView>
    );
  }
}
