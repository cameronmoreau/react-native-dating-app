import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

import * as Animatable from 'react-native-animatable';

const UserCard = ({ imageUrl, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flex: 1 }}
    >
      <Animatable.View
        onPress={onPress}
        style={styles.container}
        animation="zoomInDown"
        duration={500}
        easing="ease-in-sine"
      >
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    position: 'relative',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0.5, height: 0.5 }
  },
  image: {
    flex: 1,
    borderRadius: 8,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 8
  }
});

export default UserCard;