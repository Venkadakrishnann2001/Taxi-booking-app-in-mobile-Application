// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import axios from 'axios'; // Import Axios for making HTTP requests

// export default function CarBookingPage() {
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [dropoffLocation, setDropoffLocation] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [distance, setDistance] = useState('');
//   const [phone, setPhone] = useState('');
//   const [username, setUsername] = useState('');
//   const [bookingAmount, setBookingAmount] = useState(0);
//   const navigation = useNavigation();

//   // Function to generate and send OTP
//   const generateAndSendOTP = (carTitle, otp) => {
//     Alert.alert('OTP Confirmation', `Your OTP is: ${otp}`, [
//       {
//         text: 'Cancel',
//         style: 'cancel',
//       },
//       {
//         text: 'Confirm',
//         onPress: () => {
//           // Pass booking details, OTP, and car title to the TransactionPage
//           navigation.navigate('TransactionPage', {
//             bookingDetails: {
//               username,
//               phone,
//               pickupLocation,
//               dropoffLocation,
//               date,
//               time,
//               distance,
//               bookingAmount,
//             },
//             otp, // Pass the received OTP
//             CarDetails: {
//               car: {
//                 title: carTitle,
//               },
//             },
//           });
//         },
//       },
//     ]);
//   };

//   // Modify the handleBooking function to send a POST request to your backend
//   const handleBooking = async () => {
//     // Check if any of the required fields are empty
//     if (
//       !pickupLocation ||
//       !dropoffLocation ||
//       !date ||
//       !time ||
//       !distance ||
//       !phone ||
//       !username
//     ) {
//       Alert.alert('Error', 'Please fill in all fields before booking.');
//       return;
//     }

//     // Calculate the booking amount based on distance
//     const ratePerKilometer = 30; // 30 rupees per kilometer
//     const distanceValue = parseFloat(distance);
//     if (isNaN(distanceValue)) {
//       Alert.alert('Error', 'Invalid distance input.');
//       return;
//     }
//     const bookingAmount = distanceValue * ratePerKilometer;

//     // Set the car title based on the booking amount
//     let carTitle = '';
//     if (bookingAmount >= 2500) {
//       carTitle = 'Lambohini';
//     } else if (bookingAmount >= 2000) {
//       carTitle = 'Mahindra';
//     } else if (bookingAmount >= 1500) {
//       carTitle = 'Honda';
//     } else if (bookingAmount < 1000) {
//       carTitle = 'Shift';
//     }

//     // Create a booking object to send to the server
//     const bookingData = {
//       username,
//       phone,
//       pickupLocation,
//       dropoffLocation,
//       date,
//       time,
//       distance,
//       bookingAmount,
//     };

//     try {
//       // Send a POST request to your backend API endpoint
//       const response = await axios.post('http://192.168.43.81:8000/api/bookingcar', bookingData);

//       // Check the response from the server and handle accordingly
//       if (response.status === 201) {
//         const otp = response.data.otp;

//         // Trigger OTP generation with the car title and received OTP
//         generateAndSendOTP(carTitle, otp);
//       } else {
//         // Handle the case when the booking fails
//         Alert.alert('Booking Failed', 'Unable to book the car at this time. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error booking the car:', error);
//       Alert.alert('Booking Error', 'An error occurred while booking the car. Please try again.');
//     }
//   };

//   // Define the rate per kilometer
//   const ratePerKilometer = 30; // 30 rupees per kilometer

//   // Function to calculate the booking amount based on distance
//   const calculateAmount = () => {
//     // Ensure that the distance is a valid number
//     const distanceValue = parseFloat(distance);
//     if (!isNaN(distanceValue)) {
//       const calculatedAmount = distanceValue * ratePerKilometer;
//       setBookingAmount(calculatedAmount);
//     } else {
//       // Handle invalid distance input
//       setBookingAmount(0);
//     }
//   };

//   // Use useEffect to calculate the booking amount when distance changes
//   useEffect(() => {
//     calculateAmount();
//   }, [distance]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Car Booking</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={(text) => setUsername(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         value={phone}
//         onChangeText={(text) => setPhone(text)}
//         keyboardType="phone-pad"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Pickup Location"
//         value={pickupLocation}
//         onChangeText={(text) => setPickupLocation(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Dropoff Location"
//         value={dropoffLocation}
//         onChangeText={(text) => setDropoffLocation(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Date"
//         value={date}
//         onChangeText={(text) => setDate(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Time"
//         value={time}
//         onChangeText={(text) => setTime(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Distance (in km)"
//         value={distance}
//         onChangeText={(text) => setDistance(text)}
//         keyboardType="numeric"
//       />
//       <Text style={styles.amountText}>
//         Booking Amount: {bookingAmount.toFixed(2)} rupees
//       </Text>
//       <TouchableOpacity style={styles.button} onPress={handleBooking}>
//         <Text style={styles.buttonText}>Book Now</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'lightblue',
//   },
//   header: {
//     fontSize: 44,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'red',
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 3,
//     borderColor: 'white',
//     borderRadius: 8,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   amountText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//     color: 'red',
//   },
//   button: {
//     width: '100%',
//     height: 40,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default function CarBookingPage() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [distance, setDistance] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [bookingAmount, setBookingAmount] = useState(0);
  const navigation = useNavigation();

  // Function to generate and send OTP
  const generateAndSendOTP = (carTitle, otp) => {
    Alert.alert('OTP Confirmation', `Your OTP is: ${otp}`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {
          navigation.navigate('TransactionPage', {
            bookingDetails: {
              username,
              phone,
              pickupLocation,
              dropoffLocation,
              date,
              time,
              distance,
              bookingAmount,
            },
            otp,
            CarDetails: {
              car: {
                title: carTitle,
              },
            },
          });
        },
      },
    ]);
  };

  // Modify the handleBooking function to send a POST request to your backend
  const handleBooking = async () => {
    if (
      !pickupLocation ||
      !dropoffLocation ||
      !date ||
      !time ||
      !distance ||
      !phone ||
      !username
    ) {
      Alert.alert('Error', 'Please fill in all fields before booking.');
      return;
    }

    const ratePerKilometer = 30;
    const distanceValue = parseFloat(distance);
    if (isNaN(distanceValue)) {
      Alert.alert('Error', 'Invalid distance input.');
      return;
    }
    const bookingAmount = distanceValue * ratePerKilometer;

    let carTitle = '';
    if (bookingAmount >= 2500) {
      carTitle = 'Lambohini';
    } else if (bookingAmount >= 2000) {
      carTitle = 'Mahindra';
    } else if (bookingAmount >= 1500) {
      carTitle = 'Honda';
    } else if (bookingAmount < 1000) {
      carTitle = 'Shift';
    }

    const bookingData = {
      username,
      phone,
      pickupLocation,
      dropoffLocation,
      date,
      time,
      distance,
      bookingAmount,
    };

    try {
      const response = await axios.post('http://192.168.43.81:8000/api/bookingcar', bookingData);

      if (response.status === 201) {
        const otp = response.data.otp;
        generateAndSendOTP(carTitle, otp);
      } else {
        Alert.alert('Booking Failed', 'Unable to book the car at this time. Please try again later.');
      }
    } catch (error) {
      console.error('Error booking the car:', error);
      Alert.alert('Booking Error', 'An error occurred while booking the car. Please try again.');
    }
  };

  // Function to initiate a phone call to the manager
  const handleContactManager = () => {
    const managerPhoneNumber = '9150125514'; // Replace with the actual phone number
    Linking.openURL(`tel:${managerPhoneNumber}`);
  };

  const ratePerKilometer = 30;

  const calculateAmount = () => {
    const distanceValue = parseFloat(distance);
    if (!isNaN(distanceValue)) {
      const calculatedAmount = distanceValue * ratePerKilometer;
      setBookingAmount(calculatedAmount);
    } else {
      setBookingAmount(0);
    }
  };

  useEffect(() => {
    calculateAmount();
  }, [distance]);

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../assets/images/car5.jpg')}
        style={styles.backgroundImage}
      />
      <Text style={styles.header}>
        <FontAwesomeIcon name="car" size={32} color="red" /> Car Booking
      </Text>
      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Pickup Location"
            value={pickupLocation}
            onChangeText={(text) => setPickupLocation(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Dropoff Location"
            value={dropoffLocation}
            onChangeText={(text) => setDropoffLocation(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={(text) => setDate(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Time"
            value={time}
            onChangeText={(text) => setTime(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Distance (in km)"
            value={distance}
            onChangeText={(text) => setDistance(text)}
            keyboardType="numeric"
          />
          <Text style={styles.amountText}>
            Booking Amount: {bookingAmount.toFixed(2)} rupees
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleBooking}>
            <Text style={styles.buttonText}>
              <FontAwesomeIcon name="check" size={18} color="white" /> Book Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactButton} onPress={handleContactManager}>
            <Text style={styles.buttonText}>
              <FontAwesomeIcon name="phone" size={18} color="white" /> Contact With Admin
            </Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 150,
  },
  card: {
    width: '80%',
    backgroundColor: '#F8EA8C',
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    width: 470,
    height: 100,
    marginTop: 100,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#B1D8B7',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  contactButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#A4E8E0',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
