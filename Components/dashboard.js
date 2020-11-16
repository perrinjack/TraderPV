import React, { Component } from 'react';
import { Text } from 'react-native';
import apiKey from '../apiKey.js';
import axios from 'axios';
import { StyleSheet, View } from 'react-native';

export class Dashboard extends React.Component {
  state = {
    data: null,
    loaded: false,
  };

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=7ECA0DL4Z1Q6NGD1`
      )
      .then((res) => {
        // console.log(res);
        this.setState({
          data: [res.data],
        });
        this.setState({
          loaded: true,
        });
        // console.log(res.data['Realtime Currency Exchange Rate']["9. Ask Price"]);
      });
  };

  render() {
    return this.state.loaded && <View></View>;
  }
}
