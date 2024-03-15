import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any icon library you prefer
import { useNavigation } from '@react-navigation/native';

const IconPage = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleAdminIconPress = () => {
    // Navigate to SignUpScreen for Admin
    navigation.navigate('AdminUser', { userType: 'Admin' });
  };

  const handleClientIconPress = () => {
    // Navigate to SignUpScreen for Client
    navigation.navigate('SignUp', { userType: 'Client' });
  };

  const handleCarBookingIconPress = () => {
    // Navigate to CarBookingDetails screen
    navigation.navigate('CarBookingDetails');
  };

  const handleCarBookingDetailsPress = () => {
    // Navigate to CarBookingDetails screen
    navigation.navigate('CarBookingDetails');
  };

  return (
    <ImageBackground
      source={require('../assets/images/car5.jpg')} 
      style={styles.container}
    >
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleAdminIconPress}>
        <View style={styles.circle}>
          <Icon name="user" size={50} color="blue" />
        </View>
        <Text style={styles.label}>Admin Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleClientIconPress}>
        <View style={styles.circle}>
          <Icon name="user" size={50} color="green" />
        </View>
        <Text style={styles.label}>Client Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={handleCarBookingIconPress}>
        <View style={styles.circle}>
          <Icon name="car" size={50} color="orange" />
        </View>
        <Text style={styles.label}>Helping Content</Text>
      </TouchableOpacity>
      
        
      
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'lightblue',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    backgroundColor: 'lightgray', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color:'brown',
  },
});

export default IconPage;
