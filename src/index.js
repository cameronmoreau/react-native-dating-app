import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Explore from './scenes/Explore';


/**
 * Base level navigator
 * This Stack navigator is special because it
 * can display modals on any screen
 */
const AppNavigator = StackNavigator(
  {
    HomeNavigator: { screen: Explore }
  },
  {
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
  }
);

export default AppNavigator;