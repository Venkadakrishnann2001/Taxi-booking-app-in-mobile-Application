import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Linking } from 'react-native';

const ParagraphComponent = () => {
  const handleTerminalLinkPress = () => {
    // Define the URL you want to open
    const url = 'https://www.pinterest.com/pin/592153050990668437/';

    // Use the Linking API to open the URL in the default web browser
    Linking.openURL(url)
      .catch((err) => {
        console.error('An error occurred:', err);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/car.jpg')}
        style={styles.image}
      />
      <Text style={styles.paragraph}>
        <Text style={styles.highlight}>AdminPage:</Text> The Admin serves as the control center for taxi service providers. In the transition from traditional car booking to the taxi format, the Admin plays a pivotal role. It enables taxi companies to efficiently manage their fleet, drivers, and overall operations. Admins can monitor real-time driver locations, track bookings, and optimize dispatching to ensure prompt service. They can also handle driver onboarding, verify documentation, and conduct performance evaluations to maintain service quality.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.highlight}>ClientPage:</Text> For clients, the transition to the taxi format via the ClientPage signifies a leap in convenience and accessibility. Through a user-friendly mobile app or website, clients can easily request a taxi based on their location, view driver details, and estimate arrival times. The app's interactive map feature allows passengers to track their ride in real time, enhancing safety and reliability. In-app payments simplify transactions, eliminating the need for cash.
      </Text>
      <Text style={styles.paragraph}>
        This transition has bridged the gap between passengers and taxi services, making transportation seamless and efficient. Clients can quickly book a taxi, while taxi companies can streamline their operations through the AdminPage. Overall, this evolution from traditional car booking to the taxi format has revolutionized urban mobility, providing a win-win solution for both service providers and clients.
      </Text>
      <TouchableHighlight onPress={handleTerminalLinkPress}>
        <Text style={styles.terminalLink}>Terminal Link</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'lightgreen',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10,
    marginTop: 0,
  },
  highlight: {
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 90,
    borderRadius: 100,
    marginTop: 0,
  },
  terminalLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default ParagraphComponent;

