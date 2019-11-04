import React,{ useState } from 'react';
import { TextInput } from 'react-native-paper';


const MyComponent = ({callbackFromExercice, data}) => {

    const callback = callbackFromExercice;
    const text = data;

    return (
        <TextInput
            value={text}
            mode="outlined"
            label='Your answer is'
            onChangeText={(text) => {
               callbackFromExercice(text);
            }}
        />
        )
}

export default MyComponent;
