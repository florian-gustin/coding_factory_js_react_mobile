//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createBottomTabNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './views/HomeScreen';
import SettingsScreen from './views/SettingsScreen';
import DetailsScreen from './views/DetailsScreen';
import ProfileScreen from './views/ProfileScreen';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2e2d2d',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
const ProfileStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#2e2d2d',
      },
      headerTintColor: '#FFFFFF',
      title: 'Profile',
      //Header title
    },
  }
);
const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Profile: { screen: ProfileStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Profile', {idSelected: 12}) {
          iconName = `ios-star`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);
