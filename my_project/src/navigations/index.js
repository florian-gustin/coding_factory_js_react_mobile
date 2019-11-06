import {
    createDrawerNavigator
} from 'react-navigation-drawer';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';




import HomeSearchScreen from "../views/HomeSearchScreen"
import MovieDetailScreen from "../views/MovieDetailScreen"
import AboutScreen from "../views/AboutScreen"
import ProfileScreen from "../views/ProfileScreen"

const drawerNavigator = createDrawerNavigator({
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


const DrawerNavigation = createAppContainer(drawerNavigator);

export default DrawerNavigation;