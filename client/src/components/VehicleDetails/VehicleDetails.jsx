import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import { fetchVehicleAction } from '../../redux/vehicle/vehicleActionCreators';
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

  calculateWidth = () => {
    this.setState({
      width: Dimensions.get('window').width
    });
  }

  render() {
    const { isError, isFetching, vehicle } = this.props;
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
                <Button>Reserve Now</Button>
              </View>
            </ScrollView>
          ) : null
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
  isError: state.vehicle.isError,
  isFetching: state.vehicle.isFetching,
  vehicle: state.vehicle.vehicle
});

const mapDispatchToProps = dispatch => ({
  handleFetchVehicle: id => {
    dispatch(fetchVehicleAction(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetails);
