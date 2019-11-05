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
            if (validateNumber(text) == true) {
                dispatch(setText(text));
                dispatch(increment());
            }
        }
        else if(text == '') {
            dispatch(clearText());
        }
    }

    function validateNumber(strNumber) {
        var regExp = new RegExp('^\\d+$');
        var isValid = regExp.test(strNumber); // or just: /^\d+$/.test(strNumber);
        return isValid;
    }

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
