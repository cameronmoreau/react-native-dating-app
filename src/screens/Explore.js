import React, { Component } from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { UserCard, MatchButton, NoMoreMatches } from "../components";
import { Colors } from "../constants";

import * as Animatable from "react-native-animatable";

class Explore extends Component {
  state = {
    loading: false,
    userIndex: 0,
    users: [],
  };

  componentDidMount() {
    this._fetchUsers();
  }

  _fetchUsers = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch("https://api.randomuser.me/?results=5");
      const { results } = await response.json();
      this.setState({ loading: false, users: results, userIndex: 0 });
    } catch (e) {
      this.setState({ loading: false });
      Alert.alert("Failed to load", "There was an issue loading users");
    }
  };

  _userLike = () => {
    // TODO: User like stuff
    this._nextUser();
  };

  _userDislike = () => {
    // TODO: User dislike stuff
    this._nextUser();
  };

  _userPressed = (user) => {
    this.props.navigation.navigate("UserProfile", {
      imageUrl: user.picture.large,
    });
  };

  _nextUser = () =>
    this.setState({
      userIndex: this.state.userIndex + 1,
    });

  render() {
    const { userIndex, users, loading } = this.state;
    const user = users[userIndex];

    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    // Check if end of users
    if (userIndex >= users.length) {
      return <NoMoreMatches onReloadPress={this._fetchUsers} />;
    }

    // Display users
    return (
      <View style={styles.container}>
        <UserCard
          onPress={() => this._userPressed(user)}
          imageUrl={user.picture.large}
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
          >
            {user.name.first}
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
    position: "relative",
    backgroundColor: "#F8F8F9",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
  },
  name: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    backgroundColor: "transparent",
    alignSelf: "center",
  },
});

export default Explore;
