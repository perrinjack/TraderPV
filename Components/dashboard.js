import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import apiKey from '../apiKey.js';
import axios from 'axios';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Surface, Text, Card, Title, Paragraph } from 'react-native-paper';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loaded: false,
    };
  }

  componentDidMount() {
    this.handleSubmit();
  }

  componentDidUpdate(prevProps) {
    if (this.props.toggle !== prevProps.toggle) {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${this.props.from}&to_currency=${this.props.to}&apikey=${apiKey}`
      )
      .then((res) => {
        console.log(res.data);
        console.log('Updated');
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
    return (
      this.state.loaded && (
        <View>
          <Card
            style={styles.surface}
            onPress={() =>
              this.props.navigation.navigate('Details', {
                fromCode: this.state.data[0]['Realtime Currency Exchange Rate'][
                  '1. From_Currency Code'
                ],
                toCode: this.state.data[0]['Realtime Currency Exchange Rate'][
                  '3. To_Currency Code'
                ],
                fromCodeFull: this.state.data[0][
                  'Realtime Currency Exchange Rate'
                ]['2. From_Currency Name'],
                toCodeFull: this.state.data[0][
                  'Realtime Currency Exchange Rate'
                ]['4. To_Currency Name'],
              })
            }
          >
            <Card.Content>
              <Title>
                {
                  this.state.data[0]['Realtime Currency Exchange Rate'][
                    '1. From_Currency Code'
                  ]
                }{' '}
                to{' '}
                {
                  this.state.data[0]['Realtime Currency Exchange Rate'][
                    '3. To_Currency Code'
                  ]
                }
              </Title>

              <Paragraph>
                {
                  this.state.data[0]['Realtime Currency Exchange Rate'][
                    '5. Exchange Rate'
                  ]
                }
              </Paragraph>
              <Paragraph>
                Last Updated:
                {
                  this.state.data[0]['Realtime Currency Exchange Rate'][
                    '6. Last Refreshed'
                  ]
                }
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  surface: {
    elevation: 40,
    borderRadius: 6,
    backgroundColor: '#4169e1',
    marginVertical: 6,
  },
});
