import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from '../constants';

const Button = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 4,
    padding: 10,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
}

export default Button;