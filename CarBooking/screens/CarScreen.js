// import React, { useState } from 'react';
// import { ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, TextInput, Alert } from 'react-native';
// import CarCard from '../screens/CarCard'; // Import your CarCard component
// import CarData from '../screens/CarData'; // Import your CarData (assuming it contains data for CarCard)


// import { useNavigation } from '@react-navigation/native';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// const CarScreen = () => {
//   const navigation = useNavigation();
//   const [isPressed, setIsPressed] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleBackButtonPress = () => {
//     // Navigate back to the previous screen
//     navigation.goBack();
//   };

//   const handleLogout = () => {
//     // Implement your logout logic here, such as clearing authentication tokens or state.
//     // You can use AsyncStorage, Redux, or any other state management method you prefer.
    
//     // Show an alert to indicate successful logout.
//     Alert.alert('Logout Successful', 'You have been logged out.', [
//       {
//         text: 'OK',
//         onPress: () => {
//           navigation.navigate('Login'); // Navigate to the homepage or login screen.
//         },
//       },
//     ]);
//   };

//   const buttonStyles = {
//     backgroundColor: isPressed ? 'lightblue' : 'transparent',
//     padding: 10,
//     borderRadius: 10,
//   };

//   const windowWidth = Dimensions.get('window').width;

//   const filteredCarData = CarData.filter((car) =>
//     car.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.logoutButtonContainer}>
//         <TouchableOpacity onPress={handleLogout}>
//           <Text style={styles.logoutButtonText}>Logout</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.searchBox}>
//         <FontAwesomeIcon name="search" size={20} color="gray" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search..."
//           onChangeText={(text) => setSearchQuery(text)}
//           value={searchQuery}
//         />
//       </View>

//       <FlatList
//         data={filteredCarData}
//         numColumns={windowWidth >= 600 ? 2 : 1}
//         renderItem={({ item }) => (
//           <CarCard CarData={item} />
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.twoColumnContainer}
//       />

//       <View style={styles.buttonRow}>
//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//           <FontAwesomeIcon name="bars" size={30} color="blue" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('AdminClient')}>
//           <FontAwesomeIcon name="home" size={30} color="green" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('CarBookingPage')}>
//           <FontAwesomeIcon name="copyright" size={30} color="blue" />
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 10,
//   },
//   twoColumnContainer: {
//     justifyContent: 'space-between',
//     padding: 16,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 16,
//     backgroundColor: 'white',
//   },
//   searchBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: 'gray',
//     borderRadius: 80,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     marginTop: 10,
//   },
//   searchIcon: {
//     marginLeft: 20,
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//   },
//   logoutButtonContainer: {
//     alignItems: 'flex-end',
//     padding: 16,
//   },
//   logoutButtonText: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
// });

// export default CarScreen;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, TextInput, Alert } from 'react-native';
import CarCard from '../screens/CarCard'; // Import your CarCard component
import CarData from '../screens/CarData'; // Import your CarData

import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const CarScreen = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBackButtonPress = () => {
    // Navigate back to the previous screen
    navigation.goBack();
  };

  const handleLogout = () => {
    // Implement your logout logic here, such as clearing authentication tokens or state.
    // You can use AsyncStorage, Redux, or any other state management method you prefer.

    // Show an alert to indicate successful logout.
    Alert.alert('Logout Successful', 'You have been logged out.', [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Login'); // Navigate to the homepage or login screen.
        },
      },
    ]);
  };

  const buttonStyles = {
    backgroundColor: isPressed ? 'lightblue' : 'transparent',
    padding: 10,
    borderRadius: 10,
  };

  const windowWidth = Dimensions.get('window').width;

  const filteredCarData = CarData.filter((car) =>
    car.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesomeIcon name="sign-out" size={24} color="red" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <FontAwesomeIcon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>

      <FlatList
        data={filteredCarData}
        numColumns={windowWidth >= 600 ? 2 : 1}
        renderItem={({ item }) => (
          <CarCard CarData={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.twoColumnContainer}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <FontAwesomeIcon name="bars" size={30} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdminClient')}>
          <FontAwesomeIcon name="home" size={30} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CarBookingPage')}>
          <FontAwesomeIcon name="copyright" size={30} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  twoColumnContainer: {
    justifyContent: 'space-between',
    padding: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 80,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  searchIcon: {
    marginLeft: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  logoutButtonContainer: {
    alignItems: 'flex-end',
    padding: 16,
  },
  logoutButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default CarScreen;
