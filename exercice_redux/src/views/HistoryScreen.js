import React, {useState} from 'react'
import {SafeAreaView} from "react-native";
import MyListItem from '../components/MyListItem'
import {useSelector, useDispatch} from "react-redux";

const HistoryScreen = () => {
    const history = useSelector(state => state.historyReducer)

    return (
        <SafeAreaView>
            <MyListItem/>
        </SafeAreaView>

    )
}
export default HistoryScreen;
