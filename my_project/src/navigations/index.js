import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';
import {
    createDrawerNavigator
} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeSearchScreen from "../views/HomeSearchScreen"
import MovieDetailScreen from "../views/MovieDetailScreen"
import AboutScreen from "../views/AboutScreen"
import ProfileScreen from "../views/ProfileScreen"

const MyHamburger = () => (
    <IconButton
        icon="menu"
        color={Colors.red500}
        size={20}
        onPress={() => console.log('Pressed')}
    />
);





const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeSearchScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
    About : {
        screen: AboutScreen
    }
});

const homeStack = createStackNavigator({
    Home: {
        screen: HomeSearchScreen,
    },
    Detail : {
        screen: MovieDetailScreen
    }
});

const MainStack = createStackNavigator({
    DrawerNavigator : {
        screen : DrawerNavigator,
        navigationOptions: ({ navigation }) => ({
        header : MyHamburger
        })
    }
});

// const DrawerNavigation = createAppContainer(DrawerNavigator);
const DrawerNavigation = createAppContainer(MainStack);


export default DrawerNavigation;


