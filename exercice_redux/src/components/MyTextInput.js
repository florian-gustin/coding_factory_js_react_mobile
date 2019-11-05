import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {clearText, increment, setText} from '../actions';

const MyComponent = () => {
    const text = useSelector(state => state.textReducer);
    const counter = useSelector(state => state.counterReducer);

    const dispatch = useDispatch();

    function isValidNumber(text) {
        if (text != '' && text.length == 1) {
            console.log("cédric");

            if (validateNumber(text) == true) {
                dispatch(setText(text));
                dispatch(increment());
            }
        }
        else if(text == '') {
            console.log("florian");
            dispatch(clearText());
        }
    }

    function validateNumber(strNumber) {
        var regExp = new RegExp('^\\d+$');
        var isValid = regExp.test(strNumber); // or just: /^\d+$/.test(strNumber);
        return isValid;
    }

    console.log("DorianIntoFlorian", text, counter);

  return (
    <TextInput
        keyboardType={'numeric'}
        value={text}
      mode="outlined"
      label="Your answer is"
      onChangeText={text => {
        isValidNumber(text)
      }}
    />
  );
};

export default MyComponent;
