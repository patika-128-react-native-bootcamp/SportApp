import React from 'react';
import {SafeAreaView, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const NewActivityScreen = () => {
  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <MapView
          style={{left: 0, right: 0, top: 0, bottom: 0, position: 'absolute'}}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 41.0229,
            longitude: 28.9554,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewActivityScreen;
