import React, { useState, useEffect } from 'react';
import {Animated, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {IconButton, Colors, Drawer, List, Divider} from 'react-native-paper';

import i118n from '../components/i118n';



const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 10000,
            }
        ).start();
    }, [])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

const FeaturesHistoryScreen = () => {

    return (
        <ScrollView >
            <Text style={{fontSize: 18, textAlign: 'center', margin: 30, textTransform: 'uppercase', fontWeight : 'bold', color: 'indigo'}}>This app was made without any boilerplate</Text>

            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>1 - form submittion</Text>
                <Divider />
            </FadeInView>

            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>2 - auth firebase</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>3 - store firestore</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>4 - store redux</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>5 - call API</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>6 - list of favorites</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>7 - video player for trailer</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>8 - bottom bar</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>9 - advanced drawer navigation</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>10 - languages EN/FR</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>11 - dark mode</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>12 - animations</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>13 - loading mode</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>14 - star icon color status</Text>
                <Divider />

            </FadeInView>
            <FadeInView style={{height: 50}}>
                <Text style={{fontSize: 12, textAlign: 'center', margin: 10, textTransform: 'uppercase', fontWeight : 'bold'}}>15 - UX</Text>
                <Divider />

            </FadeInView>
        </ScrollView>

    )
}

export default FeaturesHistoryScreen;
