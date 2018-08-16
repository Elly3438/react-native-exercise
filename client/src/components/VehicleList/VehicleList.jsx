import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchVehiclesAction } from '../../redux/vehicles/vehiclesActionCreators';

class VehicleList extends Component {

  componentDidMount() {
    this.props.handleFetchVehicles();
  }

  render() {
    const { isError, isFetching, vehicles } = this.props;

    return (
      <View>
        {
          isFetching ? <Text>FETCHING</Text> : null
        }
        {
          isError ? <Text>ERROR</Text> : null
        }
        <Text>
          Feshong List - {vehicles.length}
        </Text>
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
