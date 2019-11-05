import React from "react"
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExerciceScreen from "../views/ExerciceScreen";
import HistoryScreen from "../views/HistoryScreen";

const TabNavigator = createBottomTabNavigator(
    {
    Exercice : {screen: ExerciceScreen},
    History : {screen: HistoryScreen},
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Exercice') {
                    iconName = `ios-home`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                } else if (routeName === 'History') {
                    iconName = `ios-star`;
                }
                return <IconComponent name={iconName} size={20} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'indigo',
            inactiveTintColor: 'gray',
        },
    }
)
export default createAppContainer(TabNavigator)
