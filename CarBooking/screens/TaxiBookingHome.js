// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// const TaxiBookingHome = ({ navigation }) => {
//   const handleBookTaxi = () => {
//     navigation.navigate('CarScreen');
//   };

//   const handleLoginClick = () => {
//     navigation.navigate('Login'); // Navigate to the EmailEditScreen
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/icons/car.jpg')}
//         style={styles.logo}
//       />
//       <TouchableOpacity style={styles.loginIconContainer} onPress={handleLoginClick}>
//         <Image
//           source={require('../assets/icons/login.jpg')} // Replace with your login icon image
//           style={styles.loginIcon}
//         />
//       </TouchableOpacity>
//       <Text style={styles.title}>Welcome to My Taxi App</Text>
//       <TouchableOpacity style={styles.button} onPress={handleBookTaxi}>
//         <Text style={styles.buttonText}>Book a Taxi screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 1,
//     backgroundColor: 'transparent',
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//     borderRadius: 50,
//   },
//   loginIconContainer: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//   },
//   loginIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 25,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default TaxiBookingHome;

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';

const TaxiBookingHome = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleBookTaxi = () => {
    navigation.navigate('CarScreen');
  };

  const handleLoginClick = () => {
    navigation.navigate('Login');
  };

  // const cars = [
  //   { id: 1, name: 'Car 1', image: require('../assets/images/car6.jpg') },
  //   { id: 2, name: 'Car 2', image: require('../assets/images/car2.jpg') },
  //   { id: 3, name: 'Car 3', image: require('../assets/images/car8.jpg') },
  //   // Add more car details as needed
  // ];

  // Filter the cars based on the search text
  // const filteredCars = cars.filter((car) =>
  //   car.name.toLowerCase().includes(searchText.toLowerCase())
  // );

  return (
    <ImageBackground
      source={require('../assets/images/car5.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/icons/car.jpg')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.loginIconContainer} onPress={handleLoginClick}>
          <Image
            source={require('../assets/icons/login.jpg')}
            style={styles.loginIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Welcome to My Taxi App</Text>

        {/* Search Box */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a car"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />

        {/* <ScrollView horizontal contentContainerStyle={styles.carList}>
          {filteredCars.map((car) => (
            <TouchableOpacity key={car.id} style={styles.carCard} onPress={() => handleCarSelection(car)}>
              <Image source={car.image} style={styles.carImage} />
              <Text style={styles.carName}>{car.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView> */}
        <TouchableOpacity style={styles.button} onPress={handleBookTaxi}>
          <Text style={styles.buttonText}>Book a Taxi screen</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
    marginTop:50,
    borderRadius: 100, // Make it circular
  },
  loginIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  loginIcon: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make it circular
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'orange',
  },
  searchInput: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    marginBottom: 20,
  },
  carList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carCard: {
    width: 200,
    height: 250,
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 20, // Make it rounded
    overflow: 'hidden',
    marginBottom:30,
  },
  carImage: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 20, // Match the parent's border radius
    borderTopRightRadius: 20, // Match the parent's border radius
  },
  carName: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 25,
    marginBottom:40,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TaxiBookingHome;
