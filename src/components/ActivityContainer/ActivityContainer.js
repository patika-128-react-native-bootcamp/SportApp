import React from 'react';
import {View} from 'react-native';

import styles from './ActivityContainer.styles';
import Button from '../Button';
import InfoCard from '../InfoCard';

const ActivityContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <InfoCard theme="small_box" label="Total Distance" info="2 KM" />
        <InfoCard theme="small_box" label="Total Time" info="00:45 mins" />
        <InfoCard theme="small_box" label="Average Speed" info="6 KM/H" />
      </View>
      <Button label="Start Activity" />
    </View>
  );
};

export default ActivityContainer;
