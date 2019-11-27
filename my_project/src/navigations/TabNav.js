import React from 'react';  
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import ProfileScreen from '../views/ProfileScreen';
import HomeSearchScreen from "../views/HomeSearchScreen"

const TabNavigator = createBottomTabNavigator({
    Search: { 
        screen: HomeSearchScreen,
        navigationOptions:{  
            tabBarLabel:'Search',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-search'}/>  
                </View>),  
        } },
    Favorites: { 
        screen: ProfileScreen,
        navigationOptions:{  
            tabBarLabel:'Favorites',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-star'}/>  
                </View>),  
        }  
    },  
},  
{  
  initialRouteName: "Search",  
  activeColor: '#50f',  
  inactiveColor: '#c1c1c1',  
  barStyle: { backgroundColor: '#ECECEC' },  
});
  
export default createAppContainer(TabNavigator);