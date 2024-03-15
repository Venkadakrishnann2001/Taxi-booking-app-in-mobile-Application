import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, ImageBackground } from 'react-native';

const ContactScreen = () => {
  const makePhoneCall = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;

    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(phoneUrl);
        } else {
          console.error('Phone call not supported');
        }
      })
      .catch((error) => {
        console.error('An error occurred while making the phone call:', error);
      });
  };

  return (
    <ImageBackground
      source={require('../assets/images/car6.jpg')} // Replace with your actual image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Text>Contact Us</Text>
        <TouchableOpacity onPress={() => makePhoneCall('9150125514')}>
          <Text style={styles.callButton}>Call Us</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' depending on your image and design preferences
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  callButton: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ContactScreen;
