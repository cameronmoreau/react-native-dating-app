import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserCard, MatchButton } from '../components';

import Users from '../../fakedata/users.json';

class Explore extends Component {
  render() {
    const user = Users[2];
    return (
      <View style={styles.container}>
        <UserCard
          onPress={() => this.props.navigation.navigate('UserProfile')}
          imageUrl={user.avatar}
        />
        <View style={styles.buttons}>
          <MatchButton
            icon="md-close"
            iconColor="#5B93FA"
          />
          <Text style={styles.name}>{user.name}</Text>
          <MatchButton
            icon="ios-heart"
            iconColor="#FA795C"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    position: 'relative',
    backgroundColor: 'white'
  },
  buttons: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24
  },
  name: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
})

export default Explore;