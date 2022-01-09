import React, {useState, useEffect, useRef} from 'react';
import {Platform} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  AnimatedRegion,
  Marker,
} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from './MapContainer.styles';
import {getDistanceFromLatLonInKm} from '../../utils/DistanceFunction/DistanceFunction';

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

const MapContainer = () => {
  const markerRef = useRef(null);
  // const navigation = useNavigation();
  const [runningEvent, setRunningEvent] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    routeCoordinates: [],
    distanceTravelled: 0,
    previousLatLng: {},
    coordinate: new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: 0,
      longitudeDelta: 0,
    }),
  });
  useEffect(() => {
    const {coordinate} = runningEvent;

    const watchID = Geolocation.watchPosition(
      position => {
        const {routeCoordinates, distanceTravelled} = runningEvent;
        const {latitude, longitude} = position.coords;

        const newCoordinate = {
          latitude,
          longitude,
        };
        if (Platform.OS === 'android') {
          if (markerRef) {
            markerRef.animateMarkerToCoordinate(newCoordinate, 500);
          }
        } else {
          // coordinate.timing(newCoordinate).start();
        }
        setRunningEvent({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + calculateDistance(newCoordinate),
          previousLatLng: newCoordinate,
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      },
    );
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getMapRegion = () => ({
    latitude: runningEvent.latitude,
    longitude: runningEvent.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const calculateDistance = newLatitudeLongitude => {
    const {previousLatLng} = runningEvent;
    return getDistanceFromLatLonInKm(previousLatLng, newLatitudeLongitude);
  };

  return (
    <MapView
      style={styles.map_viewport}
      provider={PROVIDER_GOOGLE}
      showUserLocation
      followUserLocation
      loadingEnabled
      region={getMapRegion}>
      {/* <Polyline coordinates={runningEvent.routeCoordinates} strokeWidth={5} /> */}
      {/* <Marker.Animated ref={markerRef} coordinate={runningEvent.coordinate} /> */}
    </MapView>
  );
};

export default MapContainer;
