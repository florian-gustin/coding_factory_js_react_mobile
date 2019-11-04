import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {View} from 'react-native';

const TextDisplay = ({logicalOperationProp}) => {

    const [textToDisplay, setTextToDisplay] = useState("");

    const txt = logicalOperationProp;
    console.log("props", txt)


    return (
        <View>
            <Text>{txt}</Text>
        </View>
    )
};

export default TextDisplay;