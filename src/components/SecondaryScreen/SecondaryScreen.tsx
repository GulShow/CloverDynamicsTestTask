import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const SecondaryScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>User Information:</Text>
      <Text style={styles.nameField}>Name: John John</Text>
      <Text style={styles.emailField}>Email: john.john@example.com</Text>
      <Text style={styles.numberField}>Phone: 555-555-5555-6666</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nameField: {
    fontSize: 18,
    marginTop: 10,
  },
  emailField: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 5,
  },
  numberField: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 5,
  },
});
