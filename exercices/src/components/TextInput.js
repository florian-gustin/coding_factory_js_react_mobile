import React,{ useState } from 'react';
import { TextInput } from 'react-native-paper';


const MyComponent = ({callbackFromExercice, callbackCount, data}) => {

    const callback = callbackFromExercice;
    const count = callbackCount;
    const text = data;

    return (
        <TextInput
            value={text}
            mode="outlined"
            label='Your answer is'
            onChangeText={(text) => {
               callback(text);
               count(text);
            }}
        />
        )
}

export default MyComponent;
