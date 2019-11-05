import React, { useState, useEffect, useContext} from 'react';
import {SafeAreaView} from "react-native";
import {Text} from "react-native-paper";
import {useSelector} from "react-redux";

const ExerciceScreen = () => {
    const counter = useSelector(state => state.counterReducer);

    return(
        <SafeAreaView>
            <Text>{counter}</Text>
        </SafeAreaView>

    )
}
export default ExerciceScreen;
