import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';
import Header from './src/components/common/Header.jsx';
import Home from './src/components/Home/Home';
import VehicleList from './src/components/VehicleList/VehicleList';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <Header>Vehicle Browser</Header>
            <Route
              component={Home}
              exact
              path="/"/>
            <Route
              component={VehicleList}
              path="/vehicle-list" />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
});
