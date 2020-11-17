import React from 'react';

import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native';
import { MockDashboard } from '../Components/mockDashboard';
import { Dashboard } from '../Components/dashboard';
import { Card } from 'react-native-paper';
import { Chart } from '../Components/chart';
import { FAB } from 'react-native-paper';

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
    flex: 1
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
            title="Your FX rate feed "
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
          <Dashboard
            from={'USD'}
            to={'JPY'}
            toggle={this.state.updateToggle}
            navigation={this.props.navigation}
          />
          {/* <Dashboard
            from={'GBP'}
            to={'EUR'}
            toggle={this.state.updateToggle}
            navigation={this.props.navigation}
          /> */}
          <MockDashboard
            navigation={this.props.navigation}
            title={'USD / GBP'}
          />
          <MockDashboard
            navigation={this.props.navigation}
            title={'USD / GBP'}
          />
          <MockDashboard
            navigation={this.props.navigation}
            title={'USD / GBP'}
          />
          <MockDashboard
            navigation={this.props.navigation}
            title={'USD / GBP'}
          />
          <MockDashboard
            navigation={this.props.navigation}
            title={'USD / GBP'}
          />
          <MockDashboard
            navigation={this.props.navigation}
            title={'USD / GBP'}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
