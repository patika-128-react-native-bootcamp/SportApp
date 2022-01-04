import React from 'react';
import {View, Text} from 'react-native';

import styles from './InfoCard.styles';

const InfoCard = ({label, info, theme}) => {
  return (
    <View style={styles[theme].info_container}>
      <Text style={styles[theme].title}>{label}</Text>
      <Text style={styles[theme].info}>{info}</Text>
    </View>
  );
};

export default InfoCard;
