import React from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';
import { TabView, TabBar, PagerScroll } from 'react-native-tab-view';

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
    { key: 'first', title: 'Today' },
    { key: 'second', title: 'Daily' },
  ]);

  const { fromCode, toCode, fromCodeFull, toCodeFull } = props.route.params;
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return (
          <SecondRoute
            title={'Todays Rate'}
            fromCode={fromCode}
            toCode={toCode}
          />
        );
      case 'second':
        return (
          <FirstRoute
            title={'Daily Rates'}
            fromCode={fromCode}
            toCode={toCode}
          />
        );

      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#4169e1' }}
    />
  );

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
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
}
