import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from './MapContainer.styles';

const MapContainer = () => {
  const navigation = useNavigation();
  const interval = useRef(null);
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getLocation = () => {
    Geolocation.watchPosition(
      position => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        setCoordinates(null);
      },
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 1000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: false,
        showLocationDialog: true,
      },
    );
  };

  useEffect(() => {
    navigation.addListener('focus', event => {
      interval.current = setInterval(() => getLocation(), 30000);
      getLocation(event);
    });
  });

  return (
    <MapView
      style={styles.map_viewport}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      region={{
        latitude: coordinates?.latitude,
        longitude: coordinates?.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
    />
  );
};

export default MapContainer;
