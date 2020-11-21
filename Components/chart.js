import React from 'react';
import { Dimensions, Text, View, StyleSheet, Button } from 'react-native';
import { Line } from 'react-native-svg';
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
  VictoryCursorContainer,
  VictoryLabel,
  createContainer,
  VictoryAxis,
  VictoryBrushLine,
  VictoryLegend,
  ChartContainer,
} from 'victory-native';
import Spinner from 'react-native-loading-spinner-overlay';
const VictoryZoomVoronoiContainer = createContainer('cursor', 'voronoi');
export class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  handleCursorChange(value, data) {
    if (value === null) return null;
    // console.log(value);
    // console.log(data);
    // points = data.filter(
    //   (item) => item.x.toDateString() === value.toDateString()
    // );
    const start = data[0].x;
    console.log(start);
    const range = data.slice(-1)[0].x - start;
    const index = Math.round(((value - start) / range) * (data.length - 1));
    console.log(data[index]);
    this.setState({ data: data[index].y });
    return data[index];
  }
  render() {
    return this.props.data ? (
      <View>
        <View style={styles.container}>
          <VictoryChart
            minDomain={{ y: 103.5 }}
            maxDomain={{ y: 103.9 }}
            scale={{ x: 'time' }}
            theme={VictoryTheme.material}
            fixLabelOverlap={true}
            containerComponent={
              <VictoryCursorContainer
                cursorDimension="x"
                onCursorChange={(value) =>
                  this.handleCursorChange(value, this.props.data)
                }
                cursorComponent={<Line stroke="yellow" strokeWidth={1.5} />}

                // cursorLabel={(cursor) =>
                //   `${new Date(activePoint.x)}, ${Math.round(activePoint.y)}`
                // }
              />
            }
          >
            <VictoryLegend
              x={125}
              y={10}
              centerTitle
              orientation="horizontal"
              gutter={20}
              colorScale={['#4169e1']}
              data={[{ name: 'Exchange Rate' }]}
            />
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
                data: { stroke: '#4169e1' },
                parent: { border: '1px solid #ccc' },
              }}
              data={this.props.data}
            />
          </VictoryChart>
        </View>
        <View>
         <Text style = {styles.spinnerTextStyle}>{this.state.data}</Text>
        </View>
      </View>
    ) : (
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
