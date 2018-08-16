import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../common/Button';

const styles = StyleSheet.create({
  home: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  homeItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  mainHeading: {
    fontSize: 25
  }
});

const Home = () => (
  <View style={styles.home}>
    <View style={styles.homeItem}>
      <Text style={styles.mainHeading}>Welcome!</Text>
    </View>
    <View style={styles.homeItem}>
      <Button isLink to="/vehicle-list">
        <Text>Start Browsing</Text>
      </Button>
    </View>
  </View>
);

export default Home;