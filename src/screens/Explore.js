import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { UserCard, MatchButton, NoMoreMatches } from '../components';
import { Colors } from '../constants';

import * as Animatable from 'react-native-animatable';

import Users from '../../fakedata/users.json';

class Explore extends Component {
  state = {
    userIndex: 0,
    users: []
  };

  componentWillMount() {
    /**
     * Save users so we're not calculating every render
     * We also want to filter out the current user
     * 
     * Btw, not double equal because it could be string or int
     */

    this.setState({
      users: Object.keys(Users)
        .filter(i => i != 1337)
        .map(i => Object.assign({ id: i }, Users[i]))
    });
  }
  

  _userLike = () => {
    // TODO: User like stuff
    this._nextUser();
  }

  _userDislike = () => {
    // TODO: User dislike stuff
    this._nextUser();
  }

  _userPressed = (userId) => {
    this.props.navigation.navigate('UserProfile', { userId });
  }

  _nextUser = () => this.setState({
    userIndex: this.state.userIndex + 1
  });

  render() {
    const { userIndex, users } = this.state;
    const user = users[userIndex];

    // Check if end of users
    if (userIndex >= users.length) {
      return (<NoMoreMatches />);
    }

    // Display users
    return (
      <View style={styles.container}>
        <UserCard
          onPress={() => this._userPressed(user.id)}
          imageUrl={user.avatar}
        />
        <View style={styles.buttons}>
          <MatchButton
            onPress={this._userDislike}
            icon="md-close"
            iconColor="#5B93FA"
          />
          <Animatable.Text
            animation="bounceIn"
            delay={750}
            duration={500}
            style={styles.name}
          >{user.name}
          </Animatable.Text>
          <MatchButton
            onPress={this._userLike}
            icon="ios-heart"
            iconColor={Colors.primaryColor}
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
    backgroundColor: '#F8F8F9'
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