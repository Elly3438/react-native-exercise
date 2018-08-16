import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#346094',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  headerText: {
    color: '#fff',
    fontSize: 20
  }
});

const Header = ({ children }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{children}</Text>
  </View>
);

Header.propTypes = {
  children: PropTypes.string
};

export default Header;
