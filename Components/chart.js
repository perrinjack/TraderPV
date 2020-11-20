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
import Spinner from 'react-native-loading-spinner-overlay';
const VictoryZoomVoronoiContainer = createContainer('zoom', 'voronoi');
export class Chart extends React.Component {
  render() {
    return this.props.data ? (
      // <View style={styles.container}>
      <VictoryChart
      // minDomain={{ y: 0.83 }}
      //    maxDomain={{ y: 0.89 }}
        scale={{ x: 'time' }}
        theme={VictoryTheme.material}
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
          fixLabelOverlap={true}
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
          data={this.props.data}
        />
      </VictoryChart>
    ) : (
      //* </View> */}
      <Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
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
  spinnerTextStyle: {
    color: '#FFF',
  },
});
