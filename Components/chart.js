import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import {
  LineChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const screen = Dimensions.get('screen').width;

export class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: Dimensions.get('screen').width };
  }
  componentDidMount() {
    Dimensions.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onChange);
  }

  onChange = ({ screen }) => {
    this.setState({ width: Dimensions.get('screen').width });
    console.log('Changed');
  };

  render() {
    return (
      <LineChart
        data={data(this.props.data)}
        width={this.state.width}
        height={220}
        chartConfig={chartConfig}
        bezier
        // yAxisLabel="$"
        yAxisSuffix="p"
      />
    );
  }
}

const chartConfig = {
  backgroundGradientFrom: '#1d2238',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#1d2238',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `#4169e1`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: true, // optional
};

const data = (data_in) => {
  return {
    
    datasets: [
      {
        data: data_in,
        color: (opacity = 1) => `#4169e1`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Exchange Rate'], // optional
  };
};
