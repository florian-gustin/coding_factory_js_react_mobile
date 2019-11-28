import React, {useState} from 'react';
import {IconButton, Colors, Drawer, List, Divider} from 'react-native-paper';
import {TouchableOpacity,View,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';


import {
    createDrawerNavigator
} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';


import HomeSearchScreen from "../views/HomeSearchScreen"
import MovieDetailScreen from "../views/MovieDetailScreen"
import AboutScreen from "../views/AboutScreen"
import ProfileScreen from "../views/ProfileScreen"
import SigninScreen from '../views/SigninScreen';
import SingnupScreen from '../views/SignupScreen';
import SettingsScreen from '../views/SettingsScreen';
import FeaturesHistoryScreen from "../views/FeaturesHistoryScreen";
import {
    signOutUser
} from '../helpers/vendors/Firebase'

import { username,  setDarkMode } from '../actions';

import i118n from '../components/i118n';



// hambuger icon component
const MyHamburger = ({navigation}) => (
    <IconButton
        icon="menu"
        color={"#9c27b0"}
        size={20}
        onPress={() => navigation.toggleDrawer()}
    />
);

// drawer navigation component
const MyDrawer = ({navigation}) => {
    const [active, setActive] = useState('Home')
    const darkMode = useSelector(state => state.darkModeReducer);

    function handleStateColor(screen, title, icon) {
        return(
            <TouchableOpacity
                onPress={() => {
                    setActive(screen)
                    navigation.navigate(screen)
                }}
                style={{
                    backgroundColor: (active == screen? 'indigo' : 'white'),
                }}
            >
                <List.Item
                    titleStyle={{
                        fontWeight: 'bold', textAlign: 'center',marginLeft: -45, letterSpacing: 2, textTransform: 'uppercase', color: (active == screen? 'white' : 'black')
                    }}
                    title={title}
                    left={props => <List.Icon {...props} icon={icon} color={active == screen? Colors.white : Colors.grey} />}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View>
            {handleStateColor("Home", i118n.t("navigation.home"), "magnify")}
            <Divider />
            {handleStateColor("Profile", i118n.t("navigation.profile"), "account")}
            <Divider />
            {handleStateColor("Settings", i118n.t("navigation.settings"), "settings-outline")}
            <Divider />
            {handleStateColor("Features", i118n.t("navigation.features"), "feature-search")}
            <Divider />
            {handleStateColor("About", i118n.t("navigation.about"), "information")}

            <Divider />

            <View
                style={{
                    marginTop: 50,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <IconButton
                    icon="logout-variant"
                    color={Colors.purple900}
                    size={40}
                    onPress={async () => signOutUser(navigation)}
                    // call crud firebase auth (signOut)
                />
            </View>
        </View>

    )

}
const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeSearchScreen,
        navigationOptions:{
            tabBarLabel:i118n.t("navigation.search"),
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-search'}/>
                </View>),
               tabBarOptions: {
                activeTintColor: 'white',
                inactiveTintColor: 'indigo',
                inactiveBackgroundColor:'white',
                activeBackgroundColor : 'indigo'
              },
        } },
    Profile: {
        screen: ProfileScreen,
        navigationOptions:{
            tabBarLabel:i118n.t("navigation.profile"),
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-star'}/>
                </View>),
                tabBarOptions: {
                    activeTintColor: 'white',
                    inactiveTintColor: 'indigo',
                    inactiveBackgroundColor:'white',
                    activeBackgroundColor : 'indigo'
                  },
          }
    },
});

const styles = StyleSheet.create({
    listItem : {
        fontWeight: 'bold', textAlign: 'center',marginLeft: -45, letterSpacing: 2, textTransform: 'uppercase', color: 'white'
    }
})

// drawer navigator , screens, component
const DrawerNavigator = createDrawerNavigator({

    Home: {
        screen: TabNavigator
    },
    Profile: {
        screen: ProfileScreen
    },
    Settings : {
        screen: SettingsScreen
    },
    About : {
        screen: AboutScreen
    },
    Settings : {
        screen : SettingsScreen
    },
    Features : {
        screen : FeaturesHistoryScreen
    }
},{
    contentComponent: MyDrawer,
    drawerWidth: 300
});

// stack navigator
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

// app container
const DrawerNavigation = createAppContainer(MainStack);
// export
export default DrawerNavigation;


