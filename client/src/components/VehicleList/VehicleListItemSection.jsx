import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative'
  }
});

const VehicleListItemSection = ({ children }) => (
  <View style={styles.section}>{children}</View>
);

VehicleListItemSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default VehicleListItemSection;
