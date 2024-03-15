// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import CarCard from './CarCard'; // Import your CarCard component

// const carData = [
//   {
//     id: '1',
//     title: 'Car 1',
//     modal: 'Model 1',
//     image: require('../assets/images/car1.jpg'), // Replace with your image path
//   },
//   {
//     id: '2',
//     title: 'Car 2',
//     modal: 'Model 2',
//     image: require('../assets/images/car2.jpg'), // Replace with your image path
//   },
//   // Add more car data objects
// ];

// const CarGrid = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.column}>
//         {carData.map((car, index) => {
//           if (index % 2 === 0) {
//             return <CarCard key={car.id} CarData={car} />;
//           }
//           return null;
//         })}
//       </View>
//       <View style={styles.column}>
//         {carData.map((car, index) => {
//           if (index % 2 !== 0) {
//             return <CarCard key={car.id} CarData={car} />;
//           }
//           return null;
//         })}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   column: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default CarGrid;


import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import CarCard from '../screens/CarCard'; // Import your CarCard component
// import CarData from '../screens/CarData';

const carData = [
  {
    id: '1',
    title: 'Shift',
    // modal: 'Model 1',
    image: require('../assets/images/car1.jpg'), // Replace with your image path
  },
  {
    id: '2',
    title: 'Lambohini',
    // modal: 'Model 2',
    image: require('../assets/images/car2.jpg'), // Replace with your image path
  },
  // Add more car data objects
];

const CarList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCarData = carData.filter((car) =>
    car.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />

      {/* Car cards */}
      <FlatList
        data={filteredCarData}
        renderItem={({ item }) => <CarCard CarData={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default CarList;
