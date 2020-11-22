import React from 'react';
import moment from 'moment';
import { StyleSheet, View, Text } from 'react-native';
import { apiKey } from '../../apiKey.js';
import axios from 'axios';
import { Card } from 'react-native-paper';
import { Chart } from '../../Components/chart';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  activePoint: {
    color: 'white',
  },
  activePointItems: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activePointItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    shadowColor: '#1d2238',
    
  }
});

export class FirstRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loaded: false,
      dataLabels: [0, 0],
    };
  }

  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit = () => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${this.props.fromCode}&to_symbol=${this.props.toCode}&outputsize=compact&apikey=${apiKey}`
      )
      .then((res) => {
        this.setState({
          data: Object.keys(res.data['Time Series FX (Daily)']).map((date) => ({
            x: new Date(date),
            y: parseFloat(res.data['Time Series FX (Daily)'][date]['4. close']),
          })),
        });
      });
  };
  render() {
    return (
      <View>
        <Card style = {styles.card}>
          <Card.Title title={`${this.props.title}`} />
          <Card.Content>
          <Chart data={this.state.data} labels={this.state.dataLabels} />
          </Card.Content>
        </Card>
      </View>
    );
  }
}
