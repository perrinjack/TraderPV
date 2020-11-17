import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import apiKey from '../apiKey.js';
import axios from 'axios';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Surface, Text, Card, Title, Paragraph } from 'react-native-paper';

export function MockDashboard(props) {
  return (
    <View>
      <Card
        style={styles.surface}
        onPress={() =>
          props.navigation.navigate('Details', {
            fromCode: 'USD',
            toCode: 'JPY',
          })
        }
      >
        <Card.Content>
          <Title>{props.title}</Title>

          <Paragraph>{Math.random()}</Paragraph>
          <Paragraph>Last Updated:</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    elevation: 40,
    borderRadius: 6,
    backgroundColor: '#4169e1',
    marginVertical: 6,
  },
});
