import React from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  FlatList,
  RefreshControl,
} from 'react-native';
import { Button } from 'react-native';
import { MockDashboard } from '../Components/mockDashboard';
import { Dashboard } from '../Components/dashboard';
import { Card } from 'react-native-paper';
import { Chart } from '../Components/chart';
import { FAB } from 'react-native-paper';

import DATA from '../Components/pairs.json';

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

  topbackdrop: {
    backgroundColor: '#1d2238',
    flex: 1,
  },
  backdrop: {
    backgroundColor: 'lightgray',
  },
});

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateToggle: false,
      loading: false,
      data: DATA,
    };
  }

  renderItem = ({ item }) =>
    item.shown ? (
      <Dashboard
        from={item.from}
        to={item.to}
        toggle={this.state.updateToggle}
        navigation={this.props.navigation}
      />
    ) : null;

  updateFeed = () => {
    this.setState({ loading: true });
    this.setState({ updateToggle: !this.state.updateToggle });
    console.log('Updated feed');
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      1000
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.topbackdrop}>
        <Card style={styles.titleCard}>
          <Card.Title
            titleStyle={{ color: 'white' }}
            title="Your FX rate feed "
            subtitle="Last Updated @"
          />
        </Card>

        <FlatList
          style={styles.home}
          data={DATA}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={this.state.loading}
              onRefresh={this.updateFeed}
              title="Updating your feed"
              tintColor="#fff"
              titleColor="#fff"
            />
          }
        />
      </SafeAreaView>
    );
  }
}
