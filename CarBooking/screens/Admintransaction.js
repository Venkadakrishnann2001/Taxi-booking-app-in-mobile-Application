


// import React, { useEffect, useState } from 'react';
// import { View, FlatList, StyleSheet, Image } from 'react-native';
// import { Card, Title, Paragraph, Button } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native';

// const TransactionList = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     // Fetch all transaction data from your API
//     fetch('http://192.168.43.81:8000/api/BookingConfirmation')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setTransactions(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching transaction data:', error);
//       });
//   }, []);

//   const handleDeleteTransaction = (transactionId) => {
//     // Make an API call to delete the transaction by its ID
//     fetch(`http://192.168.43.81:8000/api/deleteTransaction/${transactionId}`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           // Transaction deleted successfully, update the local state to remove the deleted transaction
//           setTransactions((prevTransactions) =>
//             prevTransactions.filter((transaction) => transaction._id !== transactionId)
//           );
//         } else {
//           console.error('Failed to delete the transaction');
//         }
//       })
//       .catch((error) => {
//         console.error('Error deleting the transaction:', error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={transactions}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <Card style={styles.card}>
//             <Card.Content style={styles.cardContent}>
//               <Image source={require('../assets/images/car9.jpg')} style={styles.carImage} />
//               <Title>UserName: {item.username}</Title>
//               <Paragraph>Phone: {item.phone}</Paragraph>
//               <Paragraph>Pickup Location: {item.pickupLocation}</Paragraph>
//               <Paragraph>Dropoff Location: {item.dropoffLocation}</Paragraph>
//               <Paragraph>Date: {item.date}</Paragraph>
//               <Paragraph>Time: {item.time}</Paragraph>
//               <Paragraph>Distance: {item.distance}</Paragraph>
//               <Paragraph>Booking Amount: {item.bookingAmount}</Paragraph>
//               <Paragraph>Payment Amount: {item.paymentamount}</Paragraph>
//               <TouchableOpacity
//                 onPress={() => handleDeleteTransaction(item._id)}
//                 style={styles.deleteButton}
//               >
//                 <Button mode="contained" color="red">
//                   Delete
//                 </Button>
//               </TouchableOpacity>
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
//     padding: 16,
//     backgroundColor: 'white',
//   },
//   card: {
//     marginVertical: 8,
//     backgroundColor: 'lightblue',
//     borderRadius: 10,
//     height: 390,
//     width: 400,
//     alignItems: 'center',
//   },
//   cardContent: {
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   carImage: {
//     width: 80,
//     height: 80,
//     marginRight: 10,
//     marginTop: 40,
//   },
//   deleteButton: {
//     marginTop: 20,
//   },
// });

// export default TransactionList;


import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch all transaction data from your API
    fetch('http://192.168.43.81:8000/api/BookingConfirmation')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTransactions(data);
      })
      .catch((error) => {
        console.error('Error fetching transaction data:', error);
      });
  }, []);

  const handleDeleteTransaction = (transactionId) => {
    // Make an API call to delete the transaction by its ID
    fetch(`http://192.168.43.81:8000/api/deleteTransaction/${transactionId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          // Transaction deleted successfully, update the local state to remove the deleted transaction
          setTransactions((prevTransactions) =>
            prevTransactions.filter((transaction) => transaction._id !== transactionId)
          );
        } else {
          console.error('Failed to delete the transaction');
        }
      })
      .catch((error) => {
        console.error('Error deleting the transaction:', error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              {/* <Image source={require('../assets/images/car9.jpg')} style={styles.carImage} /> */}
              <Title>UserName: {item.username}</Title>
              <Paragraph>Phone: {item.phone}</Paragraph>
              <Paragraph>Pickup Location: {item.pickupLocation}</Paragraph>
              <Paragraph>Dropoff Location: {item.dropoffLocation}</Paragraph>
              <Paragraph>Date: {item.date}</Paragraph>
              <Paragraph>Time: {item.time}</Paragraph>
              <Paragraph>Distance: {item.distance}</Paragraph>
              <Paragraph>Booking Amount: {item.bookingAmount}</Paragraph>
              <Paragraph>Payment Amount: {item.paymentamount}</Paragraph>
              <TouchableOpacity
                onPress={() => handleDeleteTransaction(item._id)}
                style={styles.deleteButton}
              >
                <Button mode="contained" color="red">
                  Delete
                </Button>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  card: {
    marginVertical: 8,
    backgroundColor: 'lightblue',
    borderRadius: 50,
    height: 300,
    width: 400,
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:20,
  },
  carImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    marginTop: 40,
  },
  deleteButton: {
    marginTop: 20,
  },
});

export default TransactionList;