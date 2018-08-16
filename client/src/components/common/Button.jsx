import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#346094',
    borderColor: '#1d3756',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 10,
    paddingTop: 10
  },
  isInvertedButton: {
    backgroundColor: '#fff',
    borderColor: '#346094',
  },
  isInvertedButtonText: {
    color: '#346094'
  }
});

const Button = ({ children, isInverted, isLink, ...others }) => {
  const btnStyles = isInverted ?
    StyleSheet.flatten([styles.button, styles.isInvertedButton]) : styles.button;
  const btnTextStyles = isInverted ?
    StyleSheet.flatten([styles.buttonText, styles.isInvertedButtonText]) : styles.buttonText;

  return isLink ? (
    <Link {...others} style={btnStyles}>
      <Text style={btnTextStyles}>
        {children}
      </Text>
    </Link>
  ) : (
    <TouchableOpacity
      {...others}
      onPress={onPress}
      style={btnStyles}>
      <Text style={btnTextStyles}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.object,
  isInverted: PropTypes.bool,
  isLink: PropTypes.bool
};

export default Button;
