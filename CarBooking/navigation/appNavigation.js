import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CarScreen from '../screens/CarScreen';
import CarDetails from '../screens/CarDetails';
import Map from '../screens/Map';
import CarBookingPage from '../screens/CarBookingPage';
 import AdminClient from '../screens/AdminClientPage';
 import AdminUser from '../screens/AdminUser';
import CarBookingDetails from '../screens/CarBookingDetails';
import Transaction from '../screens/Transaction';
import TransactionPage from '../screens/TransactionPage';
import PhotoTable from '../screens/Drivers';
import DriverDetails from '../screens/DriverDetails';
import DriverDetails1 from '../screens/DriverDetails1';
import DriverDetails2 from '../screens/DriverDetails2';
import DriverDetails3 from '../screens/DriverDetails3';
import AdminLogin from '../screens/AdminLogin';
import BookingConfirmationPage from '../screens/BookingConfirmation';
// import ContactScreen from '../screens/Contactscreen';
import TransactionList from '../screens/Admintransaction';
import TaxiBookingHome from '../screens/TaxiBookingHome';

const Stack = createNativeStackNavigator();



export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="TaxiBookingHome" options={{headerShown: true}} component={TaxiBookingHome} />
        <Stack.Screen name="CarScreen" options={{headerShown: true}} component={CarScreen} />
        <Stack.Screen name="CarDetails" options={{headerShown: true}} component={CarDetails} />
        <Stack.Screen name="Map" options={{headerShown: true}} component={Map} />
        <Stack.Screen name="CarBookingPage" options={{headerShown: true}} component={CarBookingPage} />
         <Stack.Screen name="AdminClient" options={{headerShown: false}} component={AdminClient} /> 
         <Stack.Screen name="AdminUser" options={{headerShown: false}} component={AdminUser} />
         <Stack.Screen name="AdminLogin" options={{headerShown: false}} component={AdminLogin} />
         <Stack.Screen name="CarBookingDetails" options={{headerShown: true}} component={CarBookingDetails} />
         <Stack.Screen name="Transaction" options={{headerShown: false}} component={Transaction } />
         <Stack.Screen name="TransactionPage" options={{headerShown: true}} component={TransactionPage } />
        <Stack.Screen name="PhotoTable" options={{headerShown: true}} component={PhotoTable} />
        <Stack.Screen name="DriverDetails" options={{headerShown: true}} component={DriverDetails} />
        <Stack.Screen name="DriverDetails1" options={{headerShown: true}} component={DriverDetails1} />
        <Stack.Screen name="DriverDetails2" options={{headerShown: true}} component={DriverDetails2} />
        <Stack.Screen name="DriverDetails3" options={{headerShown: true}} component={DriverDetails3} />
        <Stack.Screen name="clienttransaction" options={{headerShown: true}} component={TransactionList} />
        <Stack.Screen name="BookingConfirmation" options={{headerShown: true}} component={BookingConfirmationPage} />
        {/* <Stack.Screen name="ContactScreen" options={{headerShown: true}} component={ContactScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}