import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../common/Button';

const styles = StyleSheet.create({
  success: {
    alignItems: 'center',
    backgroundColor: '#23c670',
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  successItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  successText: {
    color: '#fff',
    fontSize: 24
  }
});

const Success = ({ location }) => {
  const { orderPlacedAt } = location.state;

  return (
    <View style={styles.success}>
      <View style={styles.successItem}>
        <Text style={styles.successText}>Success!</Text>
      </View>
      <View style={styles.successItem}>
        <Text style={styles.successText}>Your reservation is confirmed</Text>
      </View>
      <View style={styles.successItem}>
        <Text style={styles.successText}>{orderPlacedAt}</Text>
      </View>
      <View style={styles.successItem}>
        <Button
          isInverted
          isLink
          to="/vehicle-list">
          Browse More Vehicles
        </Button>
      </View>
    </View>
  );
};

export default Success;
