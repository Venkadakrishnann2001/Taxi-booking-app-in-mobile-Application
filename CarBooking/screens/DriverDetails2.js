import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const driverDetails = [
  {
    name: 'Suresh',
    imageSource: require('../assets/images/Driver4.jpg'),
    carModel: 'Shift',
    licensePlate: 'ABC 123',
    rating: 3.8,
    Experience: '3 years experience',
    location: 'Coimbatore',
  },
];

const DriverDetails2 = () => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.navigate('DriverDetails2', {
      // Pass any necessary data to the "Booking Confirmation" page here
    });
  };

  return (
    <ImageBackground source={require('../assets/images/car5.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {driverDetails.map((driver, index) => (
          <View style={styles.driverContainer} key={index}>
            <Image source={driver.imageSource} style={styles.driverImage} />
            <Text style={styles.driverName}>{driver.name}</Text>
            <Text style={styles.driverInfo}>
              Car: {driver.carModel} {'\n'}
              License Plate: {driver.licensePlate} {'\n'}
              Rating: {driver.rating} {'\n'}
              Experience: {driver.Experience} {'\n'}
              Location: {driver.location}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={handleButtonClick}
            >
              <Text style={styles.buttonText}>Click Me</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  driverContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'lightgray',
    borderRadius:50,
  },
  driverImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  driverName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  driverInfo: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DriverDetails2;
