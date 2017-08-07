import React, { Component } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

// Fake data
import Messages from '../../fakedata/messages.json';
import Users from '../../fakedata/users.json';

class Chat extends Component {
  static navigationOptions = ({ navigation }) => {
    const chatId = navigation.state.params.id;
    const chat = Messages.filter(item => item.id === chatId)[0];
    const user = Users[chat.user];

    return { title: user.name };
  }

  state = {
    chat: null,
    messages: []
  };

  componentDidMount() {
    /**
     * Store chat and GiftedChat type messages
     * in state so they arent generated on
     * every render
     * https://github.com/FaridSafi/react-native-gifted-chat
     */

    const chatId = this.props.navigation.state.params.id;
    const chat = Messages.filter(item => item.id === chatId)[0];

    this.setState({
      chat,
      messages: chat.messages.map((message, index) => {
        const user = Users[message.user];
        return {
          _id: index,
          text: message.text,
          user: {
            _id: message.user,
            avatar: user.avatar,
            name: user.name
          }
        }
      })
    });
  }
  

  _sendMessage = (messages) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const { messages } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#F8F8F9' }}>
        <GiftedChat
          messages={messages}
          onSend={this._sendMessage}
          user={{
            _id: 1337
          }}
        />
      </View>
    );
  }
}

export default Chat;