import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CarCard = ({ CarData }) => {
  const navigation = useNavigation();
  const [isAvailable, setIsAvailable] = useState(true); // State variable to track availability

  const handleCarCardPress = () => {
    navigation.navigate('CarDetails', { car: CarData });
  };

  const handleButtonPress = () => {
    // Handle button press action here
    // You can perform any desired action when the button is pressed
    // For example, navigate to another screen or perform some other action
  };

  const handleBookingButtonPress = () => {
    setIsAvailable(false); // Change availability to "Unavailable" when booking is made
    navigation.navigate('CarBookingPage', { car: CarData }); // Navigate to the booking page
  };

  useEffect(() => {
    // Use a timer to change availability to "Available" after 30 seconds
    const timer = setTimeout(() => {
      setIsAvailable(true);
    }, 80000); // 80 seconds

    return () => {
      // Clear the timer if the component unmounts
      clearTimeout(timer);
    };
  }, []);

  return (
    <TouchableOpacity onPress={handleCarCardPress}>
      <View style={styles.card}>
        <Image source={CarData.image} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{CarData.title}</Text>
          <Text style={styles.modal}>{CarData.modal}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleBookingButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>
              {isAvailable ? 'Available' : 'Unavailable'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    padding: 5,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modal: {
    fontSize: 14,
    color: 'green',
  },
});

export default CarCard;
