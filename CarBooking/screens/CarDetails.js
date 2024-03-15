// import React from 'react';
// import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// const CarDetailsScreen = ({ route }) => {
//   const { car } = route.params;
//   const navigation = useNavigation(); // Get the navigation object

//   // Function to navigate to another screen (e.g., CarScreen)
//   const goToMap = () => {
//     navigation.navigate('Map'); // Replace 'CarScreen' with the name of the screen you want to navigate to
//   };
//   const CarBookingPage = () => {
//     navigation.navigate('CarBookingPage'); // Replace 'CarScreen' with the name of the screen you want to navigate to
//   };
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.cardContainer}>
//           <View style={styles.imageContainer}>
//             <Image source={car.image} style={styles.image} />
//           </View>
//           <Text style={styles.title}>{car.title}</Text>
//           <Text style={styles.Modal}>{car.Modal}</Text>
//           <Text style={styles.specs}>Year: {car.year}</Text>
//           <Text style={styles.specs}>Mileage: {car.Mileage}</Text>
//           <Text style={styles.specs}>Seat: {car.Seat}</Text>
//           <Text style={styles.specs}>Engine Type: Good Condition</Text>
//           <Text style={styles.specs}>Driver Name: {car.DriverName}</Text>
//           <Text style={styles.specs}>Car Number Plate: {car.CarNumberPlate}</Text>
//           <Text style={styles.specs}>Car Location: {car.CarLocation}</Text>

//           {/* Add a button with onPress to trigger the navigation */}
//           <TouchableOpacity style={styles.button} onPress={goToMap}>
//             <Text style={styles.buttonText}>Go to Map</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={CarBookingPage}>
//             <Text style={styles.buttonText}>CarBookingPage</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 16 }}>
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
//     flex: 1,
//     padding: 56,
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   cardContainer: {
//     backgroundColor: 'lightblue',
//     borderRadius: 40,
//     borderColor:'black',
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     marginBottom:-20,
//     marginTop:-20,
//   },
//   imageContainer: {
//     width: 400,
//     height: 360,
//     borderRadius: 50,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 16,
//   },
//   Modal: {
//     fontSize: 20,
//     color: 'green',
//   },
//   specs: {
//     fontSize: 16,
//     marginTop: 8,
//   },
//   button: {
//     marginTop: 10,
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default CarDetailsScreen;


import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const CarDetailsScreen = ({ route }) => {
  const { car } = route.params;
  const navigation = useNavigation();

  const goToMap = () => {
    navigation.navigate('Map');
  };

  const goToCarBookingPage = () => {
    navigation.navigate('CarBookingPage');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={car.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{car.title}</Text>
          <Text style={styles.modal}>{car.modal}</Text>
          <Text style={styles.specs}>Year: {car.year}</Text>
          <Text style={styles.specs}>Mileage: {car.Mileage}</Text>
          <Text style={styles.specs}>Seat: {car.Seat}</Text>
          <Text style={styles.specs}>Engine Type: Good Condition</Text>
          <Text style={styles.specs}>Driver Name: {car.DriverName}</Text>
          <Text style={styles.specs}>Car Number Plate: {car.CarNumberPlate}</Text>
          <Text style={styles.specs}>Car Location: {car.CarLocation}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={goToMap}>
            <Text style={styles.buttonText}>Go to Map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={goToCarBookingPage}>
            <Text style={styles.buttonText}>Book Car</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.iconRow}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 100,
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    top: 400,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: 700,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    textAlign:'center'
  },
  modal: {
    fontSize: 20,
    color: 'green',
    marginTop: 8,
  },
  specs: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 150,

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    marginTop:180
  },
});

export default CarDetailsScreen;
