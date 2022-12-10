import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

export default class TrackRun extends Component {
  state = {
    hasLocationPermissions: false,
    locationResult: null,
    startTime: null,
    elapsedTime: 0,
    distance: 0
  };

  componentDidMount() {
    this.getLocationPermissions();
  }

  getLocationPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      this.setState({ hasLocationPermissions: true });
    }
  };

  getLocation = async () => {
    const { locationResult } = this.state;

    if (!locationResult) {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        this.setState({
          locationResult: 'Permission to access location was denied'
        });
      }

      const location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: location, startTime: Date.now() });
    }
  };

  render() {
    const { hasLocationPermissions, locationResult, startTime, elapsedTime, distance } = this.state;

    if (locationResult) {
      const { longitude, latitude } = locationResult.coords;

      const currentTime = Date.now();
      const newElapsedTime = currentTime - startTime;
      const newDistance = newElapsedTime * 0.1234;

      this.setState({ elapsedTime: newElapsedTime, distance: newDistance });
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <MapView.Marker
              coordinate={{ latitude: latitude, longitude: longitude }}
            />
          </MapView>
          <View style={styles.info}>
            <Text>Elapsed Time: {elapsedTime}</Text>
            <Text>Distance: {distance}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Strava', 'Your run has been saved!');
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Stop Run</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (hasLocationPermissions) {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.getLocation} style={styles.button}>
            <Text style={styles.buttonText}>Start Run</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>Waiting for Location Permission</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: '50%',
    marginTop: 10
  },
  info: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10
  },
  button: {
    backgroundColor: '#f4511e',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});