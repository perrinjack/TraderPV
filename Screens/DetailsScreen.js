import React from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';

import { MockDashboard } from '../Components/mockDashboard';
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
  },
});

export class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateToggle: false,
      loading: false,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.topbackdrop}>
        <Card>
          <Card.Title title="USD // Eur pair " />
        </Card>
        <Card>
          <Card.Title title="Daily Rates " />
          <Chart />
        </Card>
      </SafeAreaView>
    );
  }
}
