import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './NewActivityScreen.styles';
import ActivityContainer from '../../components/ActivityContainer';
import MapContainer from '../../components/MapContainer';

const NewActivityScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.map_container}>
        <MapContainer />
      </View>
      <ActivityContainer />
    </SafeAreaView>
  );
};

export default NewActivityScreen;
