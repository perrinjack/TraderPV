import React from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
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
  scene: {
    flex: 1,
  },
});

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Card>
      <Card.Title title="Daily Rates " />
      <Chart />
    </Card>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Card>
      <Card.Title title="Monthly Rates " />
      <Chart />
    </Card>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
    <Card>
      <Card.Title title="Yearly Rates " />
      <Chart />
    </Card>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export function DetailsScreen(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Daily' },
    { key: 'second', title: 'Monthly' },
    { key: 'third', title: 'Yearly' },
  ]);

  const { fromCode, toCode } = props.route.params;
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <SafeAreaView style={styles.topbackdrop}>
      <ScrollView>
        <Card>
          <Card.Title
            title={`${fromCode} / ${toCode}`}
            subtitle="United States Dollar / Euro"
          />
        </Card>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
