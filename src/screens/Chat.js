import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Fake data
import Messages from '../../fakedata/messages.json';
import Users from '../../fakedata/users.json';

class Chat extends Component {
  static navigationOptions = ({ navigation }) => {
    const chatId = navigation.state.params.id;
    const chat = Messages.filter(item => item.id === chatId)[0];
    const user = Users[chat.user];

    return {
      title: user.name
    };
  }

  render() {
    return (
      <View>
        <Text>Chat</Text>
      </View>
    );
  }
}

export default Chat;