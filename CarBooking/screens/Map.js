// import React from 'react';
// import { View } from 'react-native';
// import CarLocationMap from './CarLocationMap';

// const Map = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <CarLocationMap />
//     </View>
//   );
// };

// export default Map;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  // Define initial region (latitude, longitude, latitudeDelta, longitudeDelta)
  const initialRegion = {
    latitude: 11.0248388,
    longitude: 77.1149468,
    latitudeDelta: 0.01000,
    longitudeDelta: 0.04000,
  };

  // Define marker coordinates
  const markerCoordinates = [
    { id: 1, latitude: 11.0248388, longitude: 77.1149468, title: 'Shift car' },
    { id: 2, latitude: 11.0000997, longitude: 77.2456564, title: 'Lambohini car' },
    { id: 3, latitude: 11.0004102, longitude: 77.0215499, title: 'Mahindhra' },
    { id: 4, latitude: 11.1087107, longitude: 77.2080878, title: 'Honda' },
    // Add more marker coordinates as needed
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
      >
        {/* Render markers */}
        {markerCoordinates.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;


// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// const Map = () => {
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [dropoffLocation, setDropoffLocation] = useState('');
//   const [pickupCoordinates, setPickupCoordinates] = useState(null);
//   const [dropoffCoordinates, setDropoffCoordinates] = useState(null);

//   // Replace with your own Google Maps Geocoding API key
//   const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY';

//   const handleGetDirections = async () => {
//     try {
//       const pickupCoordinates = await getCoordinatesFromAddress(pickupLocation);
//       const dropoffCoordinates = await getCoordinatesFromAddress(dropoffLocation);

//       setPickupCoordinates(pickupCoordinates);
//       setDropoffCoordinates(dropoffCoordinates);
//     } catch (error) {
//       console.error('Error getting coordinates:', error);
//     }
//   };

//   const getCoordinatesFromAddress = async (address) => {
//     try {
//       const encodedAddress = encodeURIComponent(address);
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_MAPS_API_KEY}`
//       );

//       if (!response.ok) {
//         throw new Error('Invalid address or unable to fetch coordinates');
//       }

//       const data = await response.json();
//       if (data.results.length > 0) {
//         const { lat, lng } = data.results[0].geometry.location;
//         return { latitude: lat, longitude: lng };
//       } else {
//         throw new Error('Invalid address or unable to fetch coordinates');
//       }
//     } catch (error) {
//       throw error;
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <TextInput
//         placeholder="Enter Pickup Location"
//         value={pickupLocation}
//         onChangeText={(text) => setPickupLocation(text)}
//       />
//       <TextInput
//         placeholder="Enter Dropoff Location"
//         value={dropoffLocation}
//         onChangeText={(text) => setDropoffLocation(text)}
//       />
//       <Button title="Get Directions" onPress={handleGetDirections} />

//       <MapView
//         style={{ flex: 1 }}
//         initialRegion={{
//           latitude: 0, // Set default coordinates here
//           longitude: 0,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         {pickupCoordinates && (
//           <Marker
//             coordinate={pickupCoordinates}
//             title="Pickup Location"
//           />
//         )}
//         {dropoffCoordinates && (
//           <Marker
//             coordinate={dropoffCoordinates}
//             title="Dropoff Location"
//           />
//         )}
//       </MapView>
//     </View>
//   );
// };

// export default Map;