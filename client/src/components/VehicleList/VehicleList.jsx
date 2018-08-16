import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchVehiclesAction } from '../../redux/vehicles/vehiclesActionCreators';
import VehicleListItem from './VehicleListItem';
import Spinner from '../common/Spinner';

const styles = StyleSheet.create({
  vehicleList: {
    flex: 1
  },
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  errorText: {
    color: '#FF0000',
    fontSize: 20
  },
  noResultsText: {
    fontSize: 20
  }
});

class VehicleList extends Component {

  componentDidMount() {
    this.props.handleFetchVehicles();
  }

  keyExtractor = item => item.id;

  renderItem = ({ item }) => (
    <VehicleListItem {...item} image={item.images[0].low} />
  );

  render() {
    const { isError, isFetching, vehicles } = this.props;

    return (
      <View style={styles.vehicleList}>
        {
          isFetching ? <Spinner /> : null
        }
        {
          vehicles.length ? (
            <FlatList
              data={vehicles}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem} />
          ) : null
        }
        {
          isError ? (
            <View style={styles.centerContainer}>
              <Text style={styles.errorText}>ERROR</Text>
            </View>
          ) : null
        }
        {
          vehicles.length === 0 && !isFetching ? (
            <View style={styles.centerContainer}>
              <Text style={styles.noResultsText}>No Results</Text>
            </View>
          ) : null
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isError: state.vehicles.isError,
  isFetching: state.vehicles.isFetching,
  vehicles: state.vehicles.vehicles
});

const mapDispatchToProps = dispatch => ({
  handleFetchVehicles: () => {
    dispatch(fetchVehiclesAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);
