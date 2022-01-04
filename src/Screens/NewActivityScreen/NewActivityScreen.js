import React from 'react';
import {SafeAreaView, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import styles from './NewActivityScreen.styles';
import ActivityContainer from '../../components/ActivityContainer';

const NewActivityScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.map_container}>
        <MapView
          style={styles.map_viewport}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 41.0229,
            longitude: 28.9554,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <ActivityContainer />
    </SafeAreaView>
  );
};

export default NewActivityScreen;
