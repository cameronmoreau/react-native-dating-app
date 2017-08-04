import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class AllMessages extends Component {
  render() {
    return (
      <View>
        <Text>AllMessages</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Chat')}
        >
          <Text>Open Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AllMessages;