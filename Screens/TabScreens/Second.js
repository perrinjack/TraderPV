import React from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';

import { Card } from 'react-native-paper';
import { Chart } from '.../Components/chart';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export const SecondRoute = (props) => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Card>
      <Card.Title title={`${props.title}`} />
      <Chart data={[45, 67, 89, 78, 65, 44]} />
    </Card>
  </View>
);
