import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import colors from '../config/colors';


export default function Map({ latitude, longitude }) {
  return (
    <View style={styles.mapContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    margin: 20,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  mapStyle: {
    width: Dimensions.get('window').width - 40,
    height: 300,
    overflow: 'hidden'
  },
})
