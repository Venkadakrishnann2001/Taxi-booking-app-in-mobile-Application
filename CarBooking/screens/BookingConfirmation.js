// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Alert } from 'react-native';

// const BookingConfirmationPage = ({ route }) => {
//   const { bookingDetails, CarDetails, amount } = route.params;
//   const [dataFromBackend, setDataFromBackend] = useState(null);

//   const { username, phone, pickupLocation, dropoffLocation, date, time, distance, bookingAmount,paymentamount } = bookingDetails;


//   // Function to fetch data from the backend
//   const fetchDataFromBackend = async () => {
//     // console.log("hi")
//     try {
//       const response = await fetch('http://192.168.43.81:8000/api/BookingConfirmation', {
//         method: 'post',
//         headers: {
//           'Content-Type': 'application/json',
//           // You may need to send authentication headers or tokens here if required.
//         },
//         body: JSON.stringify({ amount, username, phone, pickupLocation, dropoffLocation, date, time, distance, bookingAmount,paymentamount }),
    
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const data = await response.json();
//       setDataFromBackend(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchDataFromBackend();

//     // Display a payment transaction alert
//     Alert.alert('Payment Success', 'Your payment was successful.');
//   }, []); // Fetch data and display alert when the component mounts

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Booking Confirmation</Text>
//       {bookingDetails ? (
//         <View style={styles.customCard}>
//           <Text style={styles.h}>Booking Details</Text>
//           <Text>Username: {bookingDetails.username}</Text>
//           <Text>Phone Number: {bookingDetails.phone}</Text>
//           <Text>Car Title: {CarDetails.car.title}</Text>
//           <Text>Pickup Location: {bookingDetails.pickupLocation}</Text>
//           <Text>Dropoff Location: {bookingDetails.dropoffLocation}</Text>
//           <Text>Date: {bookingDetails.date}</Text>
//           <Text>Time: {bookingDetails.time}</Text>
//           <Text>Distance: {bookingDetails.distance} km</Text>
//           <Text>Booking Amount: {bookingDetails.bookingAmount.toFixed(2)} rupees</Text>
//           <Text>Payment Amount: ${amount}</Text>
//         </View>
//       ) : (
//         <Text>Booking details are not available.</Text>
//       )}

//       {dataFromBackend && (
//         <View>
//           <Text>Data from Backend:</Text>
//           <Text>{JSON.stringify(dataFromBackend)}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'lightblue',
//   },
//   h: {
//     color: 'red',
//     fontWeight: 'bold',
//     fontSize: 18,
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: 'red',
//   },
//   customCard: {
//     borderWidth: 4,
//     borderColor: 'black',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
// });

// export default BookingConfirmationPage;


//----------------------------------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { Card } from 'react-native-paper';

// const BookingConfirmationPage = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://192.168.43.81:8000/api/BookingConfirmation')
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Booking Confirmations</Text>
//       <FlatList
//         data={data}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Card style={styles.card}>
//             <Card.Content>
//               <Text style={styles.cardText}>Username: {item.username}</Text>
//               <Text style={styles.cardText}>Phone: {item.phone}</Text>
//               <Text style={styles.cardText}>Pickup Location: {item.pickupLocation}</Text>
//               <Text style={styles.cardText}>Dropoff Location: {item.dropoffLocation}</Text>
//               <Text style={styles.cardText}>Date: {item.date}</Text>
//               <Text style={styles.cardText}>Time: {item.time}</Text>
//               <Text style={styles.cardText}>Distance: {item.distance} km</Text>
//               <Text style={styles.cardText}>Booking Amount: ${item.bookingAmount}</Text>
//               <Text style={styles.cardText}>Payment Amount: ${item.paymentAmount}</Text>
//             </Card.Content>
//           </Card>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   card: {
//     marginVertical: 10,
//     padding: 10,
//     backgroundColor: 'lightblue', // Customize card background color
//     borderWidth: 2,
//     borderColor: 'blue', // Customize card border color
//     borderRadius: 10,
//   },
//   cardText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
// });

// export default BookingConfirmationPage;


//-------------------------------------------------------------------------


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const BookingConfirmationPage = ({ route }) => {
  const { bookingDetails, CarDetails, amount } = route.params;
  const [data, setData] = useState([]);
const paymentamount=amount;
  const { username, phone, pickupLocation, dropoffLocation, date, time, distance, bookingAmount} = bookingDetails;
// console.log(bookingAmount);
  useEffect(() => {
    // Fetch data from your backend
    fetch('http://192.168.43.81:8000/api/BookingConfirmation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, username, phone, pickupLocation, dropoffLocation, date, time, distance, bookingAmount, paymentamount }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [amount, username, phone, pickupLocation, dropoffLocation, date, time, distance, bookingAmount, paymentamount]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking Confirmation</Text>
      {bookingDetails ? (
        <View style={styles.customCard}>
          <Text style={styles.h}>Bookings</Text>
          <Text>Username: {bookingDetails.username}</Text>
          <Text>Phone Number: {bookingDetails.phone}</Text>
          <Text>Car Title: {CarDetails.car.title}</Text>
          <Text>Pickup Location: {bookingDetails.pickupLocation}</Text>
          <Text>Dropoff Location: {bookingDetails.dropoffLocation}</Text>
          <Text>Date: {bookingDetails.date}</Text>
          <Text>Time: {bookingDetails.time}</Text>
          <Text>Distance: {bookingDetails.distance} km</Text>
          <Text>Booking Amount: {bookingDetails.bookingAmount.toFixed(2)} rupees</Text>
          <Text>Payment Amount: ${amount}</Text>
        </View>
      ) : (
        <Text>Booking details are not available.</Text>
      )}

      {/* <Text style={styles.h}>Booking Confirmations</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.cardText}>Username: {item.username}</Text>
              <Text style={styles.cardText}>Phone: {item.phone}</Text>
              <Text style={styles.cardText}>Pickup Location: {item.pickupLocation}</Text>
              <Text style={styles.cardText}>Dropoff Location: {item.dropoffLocation}</Text>
              <Text style={styles.cardText}>Date: {item.date}</Text>
              <Text style={styles.cardText}>Time: {item.time}</Text>
              <Text style={styles.cardText}>Distance: {item.distance} km</Text>
              <Text style={styles.cardText}>Booking Amount: ${item.bookingAmount}</Text>
              <Text style={styles.cardText}>Payment Amount: ${item.paymentAmount}</Text>
            </Card.Content>
          </Card>
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  h: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    alignItems:'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  customCard: {
    borderWidth: 4,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default BookingConfirmationPage;
