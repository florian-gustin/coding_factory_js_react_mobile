import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {View, Image} from 'react-native';
import {CustomRow} from '../helpers/CustomRow';
import {useSelector} from 'react-redux';

const TextDisplay = () => {
    const text = useSelector(state => state.textReducer());
    const winNumber = useSelector(state => state.numberToFindReducer());

    const displayMessage = (text < winNumber) ? "Too fcking small dick" : (text > winNumber) ? "woaw, ur dick is fcking big" : "Spread me !!";

  function addImageToDisplayWhenSubmitted() {
      const folder = "../../assets/img/";
    if (text == '') {
      return;
    }
    let path = '';

    if(text < winNumber) {
        path = require(folder + 'tooSmall.jpg');
    }else if(text > winNumber) {
        path = require(folder + 'tooBig.jpg');
    }else {
        path = require(folder + 'congratulations.jpg');
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

  return (
    <View>
      <Text style={{textAlign: 'center'}}>{displayMessage}</Text>
      {addImageToDisplayWhenSubmitted()}
    </View>
  );
};

export default TextDisplay;
