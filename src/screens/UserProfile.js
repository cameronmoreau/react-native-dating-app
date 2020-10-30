import React, { Component } from "react";
import { View, Image } from "react-native";
import { CloseButton } from "../components";

import Users from "../../fakedata/users.json";

class UserProfile extends Component {
  render() {
    const { navigation, route } = this.props;
    const { userId } = route.params;
    const user = Users[userId];

    return (
      <View style={{ flex: 1 }}>
        <Image source={{ uri: user.avatar }} style={{ flex: 1 }} />
        <CloseButton
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 35,
            left: 20,
          }}
        />
      </View>
    );
  }
}

export default UserProfile;
