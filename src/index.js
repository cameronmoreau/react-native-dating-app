import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Explore from './screens/Explore';
import AllMessages from './screens/AllMessages';
import Profile from './screens/Profile';

import UserProfile from './screens/UserProfile';
import Chat from './screens/Chat';

const HomeTabs = TabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: { title: 'Explore' }
  },
  Messages: {
    screen: AllMessages,
    navigationOptions: { title: 'Messages' }
  },
  Profile: {
    screen: Profile,
    navigationOptions: { title: 'Profile' }
  }
});

const HomeNavigator = StackNavigator(
  {
    HomeTabs: { screen: HomeTabs },
    Chat: { screen: Chat },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFF'
      },
      headerTitleStyle: {
        fontWeight: '600'
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