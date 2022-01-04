import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './LeaderboardScreen.styles';
import LeaderboardCard from '../../components/LeaderboardCard';

const LeaderboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LeaderboardCard />
    </SafeAreaView>
  );
};

export default LeaderboardScreen;
