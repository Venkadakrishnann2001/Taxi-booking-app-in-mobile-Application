import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Driver = () => {
  const navigation = useNavigation();

  // Define a sample driver object
  const driver = {
    title: 'Swift',
    Modal: '2019 Modal',
    year: '5 years',
    DriverName: 'Rahul',
    CarNumberPlate: 'TN69408',
    CarLocation: 'Thoothukudi',
  };

  // Navigate to DriverDetails and pass the driver object as a parameter
  const navigateToDriverDetails = () => {
    navigation.navigate('DriverDetails', { driver });
  };

  return (
    <View>
      <Button title="View Driver Details" onPress={navigateToDriverDetails} />
    </View>
  );
};

export default Driver;
