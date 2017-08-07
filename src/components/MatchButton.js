import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

const MatchButton = ({ icon, iconColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Animatable.View
        animation="bounceIn"
        duration={500}
        delay={750}
        style={styles.container}
      >
        <Ionicons
          name={icon}
          size={38}
          color={iconColor}
          style={{ marginTop: 4 }}
        />
      </Animatable.View>
    </TouchableOpacity>
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