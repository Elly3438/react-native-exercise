import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  spinner: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

const Spinner = ({ color, size }) => (
    <View style={styles.spinner}>
      <ActivityIndicator color={color} size={size} />
    </View>
  );

Spinner.defaultProps = {
  color: '#346094',
  size: 'large'
};

export default Spinner;
