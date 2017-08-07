import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo';

const UserCard = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    position: 'relative'
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