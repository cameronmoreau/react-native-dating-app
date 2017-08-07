import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MatchButton = ({ icon, iconColor }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        size={38}
        color={iconColor}
        style={{ marginTop: 4 }}
      />
    </View>
  );
};

const SIZE = 60;
const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'white',
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0.5, height: 0.5 }
  }
});

export default MatchButton;