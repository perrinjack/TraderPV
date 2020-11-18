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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    from: 'USD',
    to: 'EUR',
  },
  {
    id: 'bd7acbea-c1b1-46-ae3ad5',
    from: 'USD',
    to: 'JPY',
  },
  // {
  //   id: 'bd7acbea-c46c2-a-3ad',
  //   from: 'GBP',
  //   to: 'USD',
  // },
  // {
  //   id: 'bd7acbb1-46c2-aed5-3ad53abb28ba',
  //   from: 'USD',
  //   to: 'CAD',
  // },
  // {
  //   id: 'bd7acbea-c-ae3ad5',
  //   from: 'USD',
  //   to: 'EUR',
  // },
  // {
  //   id: 'bd7acbea-d5-3ad',
  //   from: 'AUD',
  //   to: 'USD',
  // },
  // {
  //   id: 'bd7acbea-c1b1-46c2-aed5-abb28ba',
  //   from: 'GBP',
  //   to: 'CHF',
  // },
  // {
  //   id: 'bda-c1b1-46c2-ae3ad5',
  //   from: 'NZD',
  //   to: 'EUR',
  // },
  // {
  //   id: 'bd7cbea-c46c2-aed5-3ad',
  //   from: 'AUD',
  //   to: 'JPY',
  // },
];

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
    };
  }

  renderItem = ({ item }) => (
    <Dashboard
      from={item.from}
      to={item.to}
      toggle={this.state.updateToggle}
      navigation={this.props.navigation}
    />
  );

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

  // pollApi() {
  //   setTimeout(
  //     function () {
  //       this.setState({ updateToggle: !this.state.updateToggle });
  //       this.pollApi();
  //     }.bind(this),
  //     60000
  //   );
  //   console.log('POLLED');
  // }

  // componentDidMount() {
  //   console.log('MOUNTED');
  //   this.pollApi(); //Polling of api.
  // }

  render() {
    return (
      <SafeAreaView style={styles.topbackdrop}>
        <Card style={styles.titleCard}>
          <Card.Title
            titleStyle={{ color: 'white' }}
            title="Your FX rate feed "
            subtitle="Last Updated @"
          />

          {/* <Card.Content>
            <FAB
              style={styles.fab}
              large
              icon="update"
              loading={this.state.loading}
              onPress={() => this.updateFeed()}
            />
          </Card.Content> */}
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

        {/* <MockDashboard
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
          /> */}
      </SafeAreaView>
    );
  }
}
