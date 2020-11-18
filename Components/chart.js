import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import {
  LineChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
// const screen = Dimensions.get('screen').width;

// export class Chart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { width: Dimensions.get('screen').width };
//   }
//   componentDidMount() {
//     Dimensions.addEventListener('change', this.onChange);
//   }

//   componentWillUnmount() {
//     Dimensions.removeEventListener('change', this.onChange);
//   }

//   onChange = ({ screen }) => {
//     this.setState({ width: Dimensions.get('screen').width });
//     console.log('Changed');
//   };

//   render() {
//     return (
//       <LineChart
//         data={data(this.props.data)}
//         width={this.state.width}
//         height={220}
//         chartConfig={chartConfig}
//         bezier
//         // yAxisLabel="$"
//         yAxisSuffix="p"
//       />
//     );
//   }
// }

// const chartConfig = {
//   backgroundGradientFrom: '#1d2238',
//   backgroundGradientFromOpacity: 0,
//   backgroundGradientTo: '#1d2238',
//   backgroundGradientToOpacity: 0.5,
//   color: (opacity = 1) => `#4169e1`,
//   strokeWidth: 2, // optional, default 3
//   barPercentage: 0.5,
//   useShadowColorFromDataset: true, // optional
// };

// const data = (data_in) => {
//   return {

//     datasets: [
//       {
//         data: data_in,
//         color: (opacity = 1) => `#4169e1`, // optional
//         strokeWidth: 2, // optional
//       },
//     ],
//     legend: ['Exchange Rate'], // optional
//   };
// };

import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryLabel,
  createContainer,
  VictoryAxis,
  LineSegment,
  VictoryBrushLine,
} from 'victory-native';

const VictoryZoomVoronoiContainer = createContainer('zoom', 'voronoi');
export class Chart extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      <VictoryChart
        scale={{ x: 'time' }}
        theme={VictoryTheme.material}
        minDomain={{ y: 1.15 }}
        maxDomain={{ y: 1.2 }}
        fixLabelOverlap={true}
        // containerComponent={
        //   <VictoryZoomVoronoiContainer
        //     labels={({ datum }) => `${datum.x}, ${datum.y}`}
        //   />
        // }
      >
        <VictoryAxis
          dependentAxis
          style={{
            grid: { stroke: '#718096', strokeDasharray: '2' },
          }}
        />
        <VictoryAxis
          fixLabelOverlap={true}
          style={{
            grid: { stroke: '#718096', strokeDasharray: '2' },
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
          }}
          data={[
            { x: new Date('2020-11-19'), y: 1.1768 },
            { x: new Date('2020-11-18'), y: 1.1868 },
            { x: new Date('2020-11-17'), y: 1.1861 },
            { x: new Date('2020-11-16'), y: 1.185 },
            { x: new Date('2020-11-15'), y: 1.1868 },
            { x: new Date('2020-11-14'), y: 1.1861 },
            { x: new Date('2020-11-13'), y: 1.185 },
            { x: new Date('2020-11-12'), y: 1.185 },
            { x: new Date('2020-11-11'), y: 1.185 },
            { x: new Date('2020-11-10'), y: 1.185 },
            { x: new Date('2020-11-09'), y: 1.185 },
            { x: new Date('2020-11-08'), y: 1.185 },
            { x: new Date('2020-11-07'), y: 1.185 },
            { x: new Date('2020-11-06'), y: 1.185 },
            { x: new Date('2020-11-05'), y: 1.185 },
            { x: new Date('2020-11-04'), y: 1.185 },
            { x: new Date('2020-11-03'), y: 1.185 },
            { x: new Date('2020-11-02'), y: 1.185 },
            { x: new Date('2020-11-01'), y: 1.185 },
          ]}
        />
      </VictoryChart>
      //* </View> */}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
