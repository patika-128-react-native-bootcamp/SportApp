import React from 'react';
import {View} from 'react-native';

import styles from './ActivityContainer.styles';
import Button from '../Button';
import InfoCard from '../InfoCard';
import ActivityDiagram from '../ActivityDiagram';

const ActivityContainer = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <InfoCard theme="small_box" label="Total Distance" info="2 KM" />
        <InfoCard theme="small_box" label="Total Time" info="00:45 mins" />
        <InfoCard theme="small_box" label="Average Speed" info="6 KM/H" />
      </View>
      <ActivityDiagram />
      <Button label="Start Activity" onPress={onPress} />
    </View>
  );
};

export default ActivityContainer;
