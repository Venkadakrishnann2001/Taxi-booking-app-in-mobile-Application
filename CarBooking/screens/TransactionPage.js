// TransactionPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const TransactionPage = ({ route, navigation }) => {
  const { bookingDetails, otp, CarDetails} = route.params;

  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');

 // TransactionPage.js
// ... (other imports)



const handlePayment = async () => {
  if (!paymentMethod || !amount) {
    Alert.alert('Error', 'Please select a payment method and enter the amount.');
    return;
  }
  
  // Extract booking details from the route.params
  const { username, phone, pickupLocation, dropoffLocation, date, time, distance, bookingAmount,paymentamount } = bookingDetails;

  try {
    // Send payment data to the backend
    const response = await fetch('http://192.168.43.81:8000/api/Transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentMethod, amount, username, phone, pickupLocation, dropoffLocation, date, time, distance, bookingAmount,paymentamount }),
    });

    if (response.ok) {
      // Payment successful, navigate to confirmation page
      navigation.navigate('BookingConfirmation', { bookingDetails, CarDetails, amount });
    } else {
      // Payment failed, display an error message
      Alert.alert('Error', 'Payment failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', 'Something went wrong. Please try again later.');
  }
};


  return (
    <View style={styles.container}>
      {/* Icon */}
      <View style={styles.iconContainer}>
        <Icon name="credit-card" size={40} color="blue" />
      </View>

      {/* Transaction details */}
      <View style={styles.transactionDetails}>
        <Text style={styles.header}>Transaction Details</Text>
        <View style={styles.transaction}>
          <Text style={styles.method}>{CarDetails.car.title}</Text>
          <Text>Username: {bookingDetails.username}</Text>
          <Text>Phone Number: {bookingDetails.phone}</Text>
          <Text>Pickup Location: {bookingDetails.pickupLocation}</Text>
          <Text>Dropoff Location: {bookingDetails.dropoffLocation}</Text>
          <Text>Date: {bookingDetails.date}</Text>
          <Text>Time: {bookingDetails.time}</Text>
          <Text>Distance: {bookingDetails.distance} km</Text>
          <Text>Booking Amount: {bookingDetails.bookingAmount.toFixed(2)} rupees</Text>
          <Text>OTP: {otp}</Text>
        </View>
      </View>

      {/* Payment Method */}
      <TextInput
        style={styles.input}
        placeholder="Payment Method (e.g., GPay, PhonePay, Bank Transfer)"
        value={paymentMethod}
        onChangeText={(text) => setPaymentMethod(text)}
      />

      {/* Amount */}
      <TextInput
        style={styles.input}
        placeholder="Amount (e.g., $50.00)"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
      />

      {/* Payment Button */}
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Make Payment</Text>
      </TouchableOpacity>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <FontAwesomeIcon name="bars" size={30} color="blue" left={-40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdminClient')}>
          <FontAwesomeIcon name="home" size={30} color="green" left={-40}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CarBookingPage')}>
          <FontAwesomeIcon name="copyright" size={30} color="blue" left={-40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 80,
    backgroundColor: 'transparent', 
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  transactionDetails: {
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  transaction: {
    borderWidth: 4,
    borderColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
  },
  method: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'red',
  },
  input: {
    borderWidth: 4,
    borderColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white', 
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    width: 470,
    height: 100,
    // Right:20,
    marginleft:-10,
    marginTop: 160,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TransactionPage;
