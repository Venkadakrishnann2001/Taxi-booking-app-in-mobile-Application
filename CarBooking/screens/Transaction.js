
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import TransactionPage from './TransactionPage';

const Stack = createStackNavigator();

const Transaction = () => {
  const transactions = [
    {
      date: '2023-09-22',
      description: 'Purchase at Store A',
      amount: 50.0,
    },
    {
      date: '2023-09-23',
      description: 'Online Payment',
      amount: -30.0,
    },
    {
      date: '2023-09-24',
      description: 'Gasoline Purchase',
      amount: 40.0,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={() => (
            <TransactionListScreen transactions={transactions} />
          )}
          options={{ title: 'Transaction List' }}
        />
        <Stack.Screen
          name="Transaction"
          component={TransactionPage}
          options={({ route }) => ({ title: route.params.transaction.description })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TransactionListScreen = ({ transactions, navigation }) => {
  return (
    <View style={styles.container}>
      {transactions.map((transaction, index) => (
        <Text
          key={index}
          style={styles.transactionItem}
          onPress={() => navigation.navigate('Transaction', { transaction })}
        >
          {transaction.description}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionItem: {
    margin: 10,
    fontSize: 18,
  },
});

export default Transaction;
