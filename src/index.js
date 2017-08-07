import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Colors } from './constants';

import Explore from './screens/Explore';
import AllMessages from './screens/AllMessages';
import Profile from './screens/Profile';

import UserProfile from './screens/UserProfile';
import Chat from './screens/Chat';

const HomeTabs = TabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      title: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-beer"
          color={tintColor}
          size={24}
        />
      )
    }
  },
  Messages: {
    screen: AllMessages,
    navigationOptions: {
      title: 'Messages',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-chatboxes"
          color={tintColor}
          size={28}
          style={{ marginTop: 4 }}
        />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-person"
          color={tintColor}
          size={32}
          style={{ marginTop: 2 }}
        />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#F87961',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOpacity: 0.05,
      shadowRadius: 4
    }
  }
});

const HomeNavigator = StackNavigator(
  {
    HomeTabs: { screen: HomeTabs },
    Chat: { screen: Chat },
  },
  {
    navigationOptions: {
      headerTintColor: Colors.primaryColor,
      headerStyle: {
        backgroundColor: '#FFF'
      },
      headerTitleStyle: {
        fontWeight: '800',
        color: Colors.textColor
      }
    }
  }
)

/**
 * Base level navigator
 * This Stack navigator is special because it
 * can display modals on any screen
 */
const AppNavigator = StackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    UserProfile: { screen: UserProfile }
  },
  {
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

export default AppNavigator;