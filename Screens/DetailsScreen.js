import React from 'react';

import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native';

import { MockDashboard } from '../Components/mockDashboard';
import { Card } from 'react-native-paper';
import { Chart } from '../Components/chart';
import { FAB } from 'react-native-paper';

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
      <SafeAreaView>
        <Chart />
      </SafeAreaView>
    );
  }
}
