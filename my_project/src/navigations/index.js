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
        color={"#9c27b0"}
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
    }
});


const MainStack = createStackNavigator({
     Signin: {
        screen: SigninScreen,
        navigationOptions: {
            header: null
        }
    },
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
        screen: SingnupScreen,
        navigationOptions: {
            header: null
        }
    }
});

// const DrawerNavigation = createAppContainer(DrawerNavigator);
const DrawerNavigation = createAppContainer(MainStack);


export default DrawerNavigation;


