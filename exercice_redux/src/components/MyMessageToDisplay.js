import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {View, Image} from 'react-native';
import {CustomRow} from '../helpers/CustomRow';
import {useSelector, useDispatch} from 'react-redux';
import {isWin} from "../actions";

const MyComponent = () => {
    const text = useSelector(state => state.textReducer);
    const nbToFind = useSelector(state => state.numberToFindReducer);
    const win = useSelector(state => state.winReducer);

    const dispatch = useDispatch();


    const displayMessage = (text=="" ? "" : (text < nbToFind) ? "Too fcking small dick" : (text > nbToFind) ? "woaw, ur dick is fcking big" : "Spread me !!");

  function addImageToDisplayWhenSubmitted() {
      const folder = "../../assets/img/";
    if (text == '') {
      return;
    }
    let path = '';

    if(text < nbToFind) {
        path = require(folder + 'tooSmall.jpg');
    }else if(text > nbToFind) {
        path = require(folder + 'tooBig.jpg');
    }else {
        path = require(folder + 'congratulations.jpg');
    }


    if(path==require(folder + 'congratulations.jpg')){
        dispatch(isWin())
    }
    return CustomRow(
      <Image
        source={path}
        style={{
          width: 150,
          height: 150,
          marginTop: 25,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'gray',
        }}
      />,
      '25%',
    );
  }
  console.log(win)

  return (
    <View>
      <Text style={{textAlign: 'center'}}>{displayMessage}</Text>
      {addImageToDisplayWhenSubmitted()}
    </View>
  );
};

export default MyComponent;
