import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Explore from './screens/Explore';
import Chat from './screens/Chat';
import Profile from './screens/Profile';

const HomeTabs = TabNavigator({
  Explore: {
    screen: Explore,
  },
  Chat: {
    screen: Chat,
  },
  Profile: {
    screen: Profile,
  }
});

const HomeNavigator = StackNavigator(
  {
    HomeTabs: { screen: HomeTabs }
  }
)

/**
 * Base level navigator
 * This Stack navigator is special because it
 * can display modals on any screen
 */
const AppNavigator = StackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator }
  },
  {
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

export default AppNavigator;