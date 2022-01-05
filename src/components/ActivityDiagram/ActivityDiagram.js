import React from 'react';
import {View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

import styles from './ActivityDiagram.styles';
import colors from '../../styles/colors';

const ActivityDiagram = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Distance per minute</Text> */}
      <BarChart
        data={{
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
          ],
          datasets: [
            {
              data: [10, 15, 15, 3, 4, 7, 6, 10],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // from react-native
        height={190}
        // yAxisLabel="m"
        yAxisSuffix="m"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          barPercentage: 0.5,
          backgroundColor: colors.primary,
          backgroundGradientFrom: colors.primary,
          backgroundGradientTo: colors.primary,
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
      />
    </View>
  );
};

export default ActivityDiagram;
