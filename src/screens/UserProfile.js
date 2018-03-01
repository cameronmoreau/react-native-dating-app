import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, BackHandler } from 'react-native';
import { CloseButton } from '../components';
import Swiper from 'react-native-swiper';

import Users from '../../fakedata/users.json';

class UserProfile extends Component {
  /////***** HANDLE BACK PRESS ******//////
  componentWillMount() {
    // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    console.log('unmount dashboard');
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    if (this.props.currentRoute.index === 0) {
      BackHandler.exitApp();
      return false;
    }
    this.props.navigation.goBack(null);
    return true;
  };

  openAuth() {
    this.props.navigation.navigate('auth');
  }

  render() {
    const { navigation } = this.props;
    const { userId } = navigation.state.params;
    const user = Users[userId];
    return (
      <Swiper
        style={styles.wrapper}
        //                showsButtons
        //                removeClippedSubviews={false}
        dotStyle={styles.dotStyle}
        loop={false}
        activeDotStyle={styles.activeDotStyle}>
        <View style={styles.slide1}>
          <Image
          source={{ uri: user.avatar }}
          style={{ flex: 1 }}

          />
        <Text style = {styles.des1}>{user.name}, {user.lastName}, {user.age}</Text>
        <Text style = {styles.des2}>Description:</Text>
        <Text style = {styles.des3}>{user.description}</Text>
          <CloseButton
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 25,
            left: 20
          }}
        />
        </View>
        <View style={styles.slide2}>
          <Image
          source={{ uri: user.avatar2 }}
          style={{ flex: 1 }}

          />
        <Text style = {styles.des1}>{user.name}, {user.lastName}, {user.age}</Text>
        <Text style = {styles.des2}>Description:</Text>
        <Text style = {styles.des3}>{user.description}</Text>
          <CloseButton
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 25,
            left: 20
          }}
        />
        </View>
        <View style={styles.slide3}>
         <Image
          source={{ uri: user.avatar3 }}
          style={{ flex: 1 }}

          />
        <Text style = {styles.des1}>{user.name}, {user.lastName}, {user.age}</Text>
        <Text style = {styles.des2}>Description:</Text>
        <Text style = {styles.des3}>{user.description}</Text>
          <CloseButton
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 25,
            left: 20
          }}
        />

        </View>
      </Swiper>
    );
  }
}

const styles = {
  dotStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
  },
  activeDotStyle: {
    backgroundColor: 'white',
  },
  wrapper: {},
  slide1: {
    width: 600,
    height: 400,
    
  },
  slide2: {
    width: 600,
    height: 400,
  },
  slide3: {
    width: 600,
    height: 400,
  },
   des1: {
     color: 'darkgray',
     height:20,
   },
  des2: {
    color: 'black',
    fontWeight: 'bold',
    height:20,
  },
  des3: {
     color: 'darkgray',
     height:20,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default UserProfile;
