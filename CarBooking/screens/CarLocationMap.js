import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; // Import this

const CarLocationMap = () => {
  const origin = { latitude: 11.032940436751653, longitude: 77.1832728435066 }; // Replace with car's starting location
  const destination = { latitude: 11.032940436751653, longitude: 77.1832728435066 }; // Replace with car's destination

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={origin} title="Car" />
        <Marker coordinate={destination} title="Destination" />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey="https://www.google.com/maps/dir/Sulur,+Tamil+Nadu/Palladam,+Tamil+Nadu/@11.011118,77.1637823,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3ba855b5630f846d:0xbfaf0134da155f58!2m2!1d77.124616!2d11.025449!1m5!1m1!1s0x3ba9a95673dd8dfb:0x6effc31a8745d016!2m2!1d77.2852097!2d10.9955767!3e0?authuser=0&entry=ttu"
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>

      {/* Add the search box */}
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'data' is the selected data from the search
          // 'details' is additional information if available
          console.log(data, details);
        }}
        query={{
          key: 'YOUR_GOOGLE_PLACES_API_KEY',
          language: 'en', // language of the results
        }}
        styles={{
          container: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          },
          textInputContainer: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        nearbyPlacesAPI="GooglePlacesSearch" // Restrict results to only show places on Google Maps
        debounce={300} // Delay before making an API request
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CarLocationMap;
