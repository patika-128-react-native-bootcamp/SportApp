import React from 'react';
import {View, Text} from 'react-native';

import styles from './LeaderboardCard.styles';

const LeaderboardCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left_container}>
        <Text style={styles.text}>1. </Text>
        <Text style={styles.text}>Elon Musk</Text>
      </View>
      <Text style={styles.text}>20 Km</Text>
    </View>
  );
};

export default LeaderboardCard;
