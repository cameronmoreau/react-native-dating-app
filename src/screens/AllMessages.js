import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ChatItem } from '../components';

// Fake data
import Messages from '../../fakedata/messages.json';
import Users from '../../fakedata/users.json';

class AllMessages extends Component {
  _chatItemPressed = (chatId) => {
    this.props.navigation.navigate(
      'Chat',
      { id: chatId }
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        { Messages.map((item, index) => {
          const id = item.id;
          const message = item.messages[0];
          const user = Users[item.user];

          return (
            <ChatItem
              key={`chat-item-${id}`}
              user={user}
              text={message.text}
              date="2 days ago"
              onPress={() => this._chatItemPressed(id)}
            />
          );
        }) }
      </View>
    );
  }
}

export default AllMessages;