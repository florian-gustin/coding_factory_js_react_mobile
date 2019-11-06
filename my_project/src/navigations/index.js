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
import SigninScreen from '../views/SigninScreen';
import SingnupScreen from '../views/SignupScreen';

const MyHamburger = ({navigation}) => (
    <IconButton
        icon="menu"
        color={Colors.red500}
        size={20}
        onPress={() => navigation.toggleDrawer()}
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
    },
    Signin: {
        screen: SigninScreen,
    },
});


const MainStack = createStackNavigator({
    DrawerNavigator : {
        screen : DrawerNavigator,
        navigationOptions: ({ navigation }) => ({
        header : MyHamburger({navigation})
        })
    },
    Home: {
        screen: HomeSearchScreen,
    },
    Detail : {
        screen: MovieDetailScreen
    },
    Signup : {
        screen: SingnupScreen
    }
});

// const DrawerNavigation = createAppContainer(DrawerNavigator);
const DrawerNavigation = createAppContainer(MainStack);


export default DrawerNavigation;


