import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './ActivityDetailScreen.styles';
import InfoCard from '../../components/InfoCard';
import Button from '../../components/Button';

const ActivityDetailScreen = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.info_container}>
        <InfoCard theme="big_box" label="Total Distance" info="20 KM" />
        <InfoCard theme="big_box" label="Total Time" info="02:35 HR" />
        <InfoCard theme="big_box" label="Activity Counter" info="4" />
        <InfoCard theme="big_box" label="Burnt Calories" info="1000 Cal" />
        <InfoCard theme="big_box" label="Total Step Count" info="32498" />
        <InfoCard
          theme="big_box"
          label="Average Activity Time"
          info="00:43 Mins"
        />
      </View>
      <Button label="Go Back" onPress={handleGoBack} />
    </SafeAreaView>
  );
};

export default ActivityDetailScreen;
