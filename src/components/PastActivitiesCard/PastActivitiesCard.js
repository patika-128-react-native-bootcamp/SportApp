import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './PastActivitiesCard.styles';
import Button from '../Button';

const PastActivitiesCard = () => {
  const navigation = useNavigation();
  const handleDetails = () => {
    navigation.navigate('ActivityDetailScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.text}>Total Distance</Text>
        <Text style={styles.text}>2 KM</Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.text}>Date</Text>
        <Text style={styles.text}>04:01:2022</Text>
      </View>
      <Button label="Go Details" onPress={handleDetails} />
    </View>
  );
};

export default PastActivitiesCard;
