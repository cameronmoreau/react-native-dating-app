import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Colors } from '../constants';

const ChatItem = ({ user, text, date, onPress }) => {
  const { name, avatar } = user;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <Text style={styles.messageText}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const AVATAR_SIZE = 60;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.08)'
  },
  contentContainer: {
    flex: 1,
    marginLeft: 8
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2
  },
  nameText: {
    fontWeight: '800',
    fontSize: 18,
    color: Colors.textColor
  },
  messageText: {
    color: Colors.textColor
  },
  dateText: {
    color: '#929292'
  }
});

export default ChatItem;