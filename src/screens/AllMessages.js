import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

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

  _renderChatItem = ({ item }) => {
    const id = item.id;
    const message = item.messages[0];
    const user = Users[item.user];

    return (
      <ChatItem
        user={user}
        text={message.text}
        date="2 days ago"
        onPress={() => this._chatItemPressed(id)}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
          data={Messages.map(item =>
            Object.assign({ key: item.id }, item)
          )}
          renderItem={this._renderChatItem}
        />
      </View>
    );
  }
}

export default AllMessages;