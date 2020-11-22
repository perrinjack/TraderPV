import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Line } from 'react-native-svg';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryCursorContainer,
  createContainer,
  VictoryAxis,
  VictoryLegend,
} from 'victory-native';
import Spinner from 'react-native-loading-spinner-overlay';
const VictoryZoomVoronoiContainer = createContainer('cursor', 'voronoi');
export class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0.87,
      date: new Date(),
    };
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.setState({
        data: this.props.data[0].y,
        date: this.props.data[0].x,
      });
    }
  }

  handleCursorChange(value, data) {
    if (value === null) return null;
    const start = data[0].x;
    console.log(start);
    const range = data.slice(-1)[0].x - start;
    const index = Math.round(((value - start) / range) * (data.length - 1));
    console.log(data[index]);
    this.setState({ data: data[index].y, date: data[index].x });
    return data[index];
  }

  getMin() {
    return (
      Math.min(...this.props.data.map((item) => item.y)) -
      0.001 * Math.min(...this.props.data.map((item) => item.y))
    );
  }

  getMax() {
    return (
      Math.max(...this.props.data.map((item) => item.y)) +
      0.001 * Math.max(...this.props.data.map((item) => item.y))
    );
  }
  render() {
    return this.props.data ? (
      <View>
        <View style={styles.activePointItems}>
          <View style={styles.activePointItem}>
            <Text style={styles.activePoint}>{this.state.data}</Text>

            <Text style={styles.activePoint}>
              {this.state.date.toDateString()}
            </Text>
          </View>
        </View>
        <View >
          <VictoryChart
            minDomain={{ y: this.getMin() }}
            maxDomain={{ y: this.getMax() }}
            scale={{ x: 'time' }}
            height = {500}
            theme={VictoryTheme.material}
            fixLabelOverlap={true}
            containerComponent={
              <VictoryCursorContainer
                cursorDimension="x"
                onCursorChange={(value) =>
                  this.handleCursorChange(value, this.props.data)
                }
                cursorComponent={<Line stroke="yellow" strokeWidth={1.5} />}
              />
            }
          >
            <VictoryLegend
              x={108}
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
    backgroundColor: 'white',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  activePoint: {
    color: 'yellow',
  },
  activePointItems: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activePointItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
