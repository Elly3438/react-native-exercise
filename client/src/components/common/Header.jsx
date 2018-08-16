import React from 'react';
import { Link, Route } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#346094',
    elevation: 2,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  headerText: {
    color: '#fff',
    fontSize: 20
  },
  mainHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerItem: {
    flex: 1
  },
  backText: {
    color: '#fff',
    marginLeft: 20
  }
});

const Header = () => (
  <View style={styles.header}>
    <Route
      exact
      path="/"
      render={() => <View style={styles.mainHeader}><Text style={styles.headerText}>Vehicle Browser</Text></View>} />
    <Route
      exact
      path="/vehicle-list"
      render={() => <View style={styles.mainHeader}><Text style={styles.headerText}>Vehicle List</Text></View>} />
    <Route
      path="/vehicle-list/:id"
      render={() => [
        <View key="vehicle_header_back" style={styles.headerItem}>
          <Link to="/vehicle-list">
            <Text style={styles.backText}>Back</Text>
          </Link>
        </View>,
        <View key="vehicle_header_title" style={styles.headerItem}>
          <Text style={styles.headerText}>Vehicle Details</Text>
        </View>,
        <View key="vehicle_header_right" style={styles.headerItem}></View>
      ]} />
  </View>
);

export default Header;
