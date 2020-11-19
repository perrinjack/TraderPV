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

export const SettingsStack = () => {
  return (
    <SafeAreaView style={styles.topbackdrop}>
      <Card style={styles.titleCard}>
        <Card.Title
          titleStyle={{ color: 'white' }}
          title="Settings "
          subtitle="Personalise your app here!"
        />
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleCard: {
    height: 90,
  },
  topbackdrop: {
    backgroundColor: '#1d2238',
    flex: 1,
  },
});
