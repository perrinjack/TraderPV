import React from 'react';
import moment from 'moment';
import { StyleSheet, View } from 'react-native';
import { apiKey } from '../../apiKey.js';
import axios from 'axios';
import { Card } from 'react-native-paper';
import { Chart } from '../../Components/chart';

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export class SecondRoute extends React.Component {
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
        `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${this.props.fromCode}&to_symbol=${this.props.toCode}&outputsize=compact&interval=5min&apikey=${apiKey}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: Object.keys(res.data['Time Series FX (5min)']).map((date) => ({
            x: new Date(moment(date)),
            y: parseFloat(res.data['Time Series FX (5min)'][date]['4. close']),
          })),
        });
      });
  };
  render() {
    return (
      <View>
        <Card>
          <Card.Title title={`${this.props.title}`} />
          <Card.Content>
            <Chart data={this.state.data} labels={this.state.dataLabels} />
          </Card.Content>
        </Card>
      </View>
    );
  }
}
