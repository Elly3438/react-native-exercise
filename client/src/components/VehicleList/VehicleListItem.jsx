import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import VehicleListItemSection from './VehicleListItemSection';
import Button from '../common/Button';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listItem: {
    borderBottomWidth: 0,
    borderColor: '#DDD',
    borderRadius: 2,
    borderWidth: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  image: {
    flex: 1,
    height: 300,
    width: null
  },
  price: {
    color: '#33664b',
    fontSize: 20,
    fontWeight: 'bold'
  },
  make: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  model: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  title: {
    flexShrink: 1
  }
});

const VehicleListItem = ({ id, image, history, make, match, model, price }) => (
  <View style={styles.listItem}>
    <VehicleListItemSection>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.make}>{make}</Text>
          <Text style={styles.model}>{model}</Text>
        </View>
        <View>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </VehicleListItemSection>
    <VehicleListItemSection>
      <Image
        source={{ uri: image }}
        style={styles.image} />
    </VehicleListItemSection>
    <VehicleListItemSection>
      <Button isInverted onPress={() => { history.push({ pathname: `${match.url}/${id}` })}}>View Vehicle</Button>
    </VehicleListItemSection>
  </View>
);

VehicleListItem.propTypes = {
  id: PropTypes.string,
  make: PropTypes.string,
  model: PropTypes.string,
  price: PropTypes.string
};

export default VehicleListItem;
