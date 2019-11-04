import React,{ useState } from 'react';
import { TextInput } from 'react-native-paper';


const MyComponent = ({callbackFromExercice}) => {

    const callback = callbackFromExercice;



    return (
        <TextInput
            label='Email'
            onChangeText={(text) => {
               callbackFromExercice(text);
            }}
        />
        )
}

export default MyComponent;