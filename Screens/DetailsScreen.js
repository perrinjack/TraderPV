import React from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';
import { TabView } from 'react-native-tab-view';

import { Card } from 'react-native-paper';
import { Chart } from '../Components/chart';
import { FirstRoute } from './TabScreens/First';
import { SecondRoute } from './TabScreens/Second';
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  topbackdrop: {
    backgroundColor: '#1d2238',
    flex: 1,
  },
});

const initialLayout = { width: Dimensions.get('window').width };

export function DetailsScreen(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Daily' },
    { key: 'second', title: 'Monthly' },
    { key: 'third', title: 'Yearly' },
  ]);

  const { fromCode, toCode, fromCodeFull, toCodeFull } = props.route.params;
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return (
          <FirstRoute
            title={'Daily Rates'}
            fromCode={fromCode}
            toCode={toCode}
          />
        );
      case 'second':
        return <SecondRoute title={'Monthly Rates'} />;
      case 'third':
        return <SecondRoute title={'Yearly Rates'} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.topbackdrop}>
      <Card>
        <Card.Title
          title={`${fromCode} / ${toCode}`}
          subtitle={`${fromCodeFull} / ${toCodeFull}`}
        />
      </Card>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </SafeAreaView>
  );
}
