import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity,ImageBackground ,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const photosData = [
  { name: 'Rahul', imageSource: require('../assets/images/Driver1.jpg') },
  { name: 'Karthik', imageSource: require('../assets/images/Driver2.jpg') },
  { name: 'Suresh', imageSource: require('../assets/images/Driver4.jpg') },
  { name: 'Arun', imageSource: require('../assets/images/Driver5.jpg') },
];

const PhotoTable = () => {
  const navigation = useNavigation();

  const handleDetailsClick = (name) => {
    // Use a switch statement or if-else to navigate to the appropriate page
    switch (name) {
      case 'Rahul':
        navigation.navigate('DriverDetails', { name });
        break;
      case 'Karthik':
        navigation.navigate('DriverDetails1', { name });
        break;
      case 'Suresh':
        navigation.navigate('DriverDetails2', { name });
        break;
      case 'Arun':
        navigation.navigate('DriverDetails3', { name });
        break;
      // Add more cases for other drivers if needed
      default:
        break;
    }
  };

  const handleTransaction = ()=>{
    navigation.navigate('clienttransaction')

  }

  return (
    <ImageBackground source={require('../assets/images/car5.jpg')} style={styles.backgroundImage}>
      
    <View style={styles.container}>
    {/* <Text style={styles.heading}>Car Drivers</Text>  */}
      {photosData.map((item, index) => (
        <View style={styles.card} key={index}>
          <Image source={item.imageSource} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <TouchableOpacity
            style={styles.detailButton}
            onPress={() => handleDetailsClick(item.name)}
          >
            <Text style={styles.detailButtonText}>Driver Detail</Text>
          </TouchableOpacity>
        </View>
      ))}
      {/* <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <FontAwesomeIcon name="bars" size={30} color="blue" padding={60} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdminClient')}>
          <FontAwesomeIcon name="home" size={30} color="green" padding={60} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CarBookingPage')}>
          <FontAwesomeIcon name="copyright" size={30} color="blue" padding={60} />
        </TouchableOpacity>
      </View> */}
      
    </View>
    <Button title="All Tranaction Details" onPress={handleTransaction} />
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    // backgroundColor: 'lightblue',
    // marginTop:'40%',
  },
  heading: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '48%', // Adjust the width as needed for two columns
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: 'gray',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
       marginbottom: 90,
    },
    marginTop:"20%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 0,
    width:'100%',
    height:'40%',
    borderRadius:40,
    backgroundColor:'white',
    marginTop:"20%",
    marginBottom:'50%'
  },
  image: {
    width: 150, // Adjust the image dimensions as needed
    height: 150,
    borderRadius: 5,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detailButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PhotoTable;
