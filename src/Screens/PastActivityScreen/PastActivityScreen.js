import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './PastActivitiesScreen.styles';
import PastActivitiesCard from '../../components/PastActivitiesCard';

const PastActivityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PastActivitiesCard />
    </SafeAreaView>
  );
};

export default PastActivityScreen;
