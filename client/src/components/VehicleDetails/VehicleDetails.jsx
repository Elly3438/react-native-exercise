import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import { fetchVehicleAction, reserveVehicleAction } from '../../redux/vehicle/vehicleActionCreators';
import Button from '../common/Button';
import Spinner from '../common/Spinner';

const styles = StyleSheet.create({
  vehicleDetails: {
    flex: 1
  },
  image: {
    flex: 1,
    height: 300
  },
  make: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold'
  },
  model: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold'
  },
  price: {
    color: '#33664b',
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    padding: 20
  },
  title: {
    marginBottom: 20
  },
  slide: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative'
  },
  trim: {
    marginBottom: 20
  },
  reservingError: {
    color: '#FF0000',
    marginBottom: 10
  }
});

class VehicleDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: Dimensions.get('window').width
    }
  }

  componentDidMount() {
    this.props.handleFetchVehicle(this.props.match.params.id);
  }

  componentDidUpdate() {
    const { orderPlacedAt } = this.props;

    if (orderPlacedAt) {
      this.props.history.push({
        pathname: '/success',
        state: {
          orderPlacedAt
        }
      });
    }
  }

  calculateWidth = () => {
    this.setState({
      width: Dimensions.get('window').width
    });
  }

  onReservePress = () => {
    this.props.handleReserveVehicle(this.props.vehicle.id);
  }

  render() {
    const { error, isError, isFetching, isReserving,
      isReservingError, orderPlacedAt, vehicle } = this.props;
    const { width } = this.state;

    return (
      <View onLayout={this.calculateWidth} style={styles.vehicleDetails}>
        {
          isFetching ? <Spinner /> : null
        }
        {
          vehicle ? (
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.title}>
                  <Text style={styles.make}>{vehicle.make}</Text>
                  <Text style={styles.model}>{vehicle.model}</Text>
                </View>
                <View>
                  <Text style={styles.price}>${vehicle.price}</Text>
                </View>
              </View>
              <View>
                <Carousel
                  data={vehicle.images}
                  itemHeight={300}
                  itemWidth={width}
                  renderItem={({item}) => (
                    <View style={styles.slide}>
                      <Image
                        source={{ uri: item.high }}
                        style={StyleSheet.flatten([styles.image, { width }])} />
                    </View>
                  )}
                  sliderWidth={width} />
              </View>
              <View style={styles.container}>
                <Text style={styles.trim}>Trim: {vehicle.trim}</Text>
                <Text>{vehicle.description}</Text>
              </View>
              <View style={styles.container}>
                {
                  isReservingError ? (
                    <Text style={styles.reservingError}>
                      There was a problem. Please wait and try again...
                    </Text>
                  ) : null
                }
                {
                  isReserving ?
                    <Spinner size="small" />
                    : <Button onPress={this.onReservePress}>Reserve Now</Button>
                }
                {
                  orderPlacedAt ? <Text>{orderPlacedAt}</Text> : null
                }
              </View>
            </ScrollView>
          ) : null
        }
        {
          error ? <Text style={styles.reservingError}>{error.message}</Text> : null
        }
        {
          isError ? (
            <View style={styles.centerContainer}>
              <Text style={styles.errorText}>ERROR</Text>
            </View>
          ) : null
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  error: state.vehicle.error,
  isError: state.vehicle.isError,
  isReservingError: state.vehicle.isReservingError,
  isFetching: state.vehicle.isFetching,
  isReserving: state.vehicle.isReserving,
  orderPlacedAt: state.vehicle.orderPlacedAt,
  vehicle: state.vehicle.vehicle
});

const mapDispatchToProps = dispatch => ({
  handleFetchVehicle: id => {
    dispatch(fetchVehicleAction(id));
  },
  handleReserveVehicle: id => {
    dispatch(reserveVehicleAction(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetails);
