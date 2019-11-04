import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {View, Image} from 'react-native';
import {createRow} from '../helpers/createRow'

const TextDisplay = ({logicalOperationProp}) => {

    const [textToDisplay, setTextToDisplay] = useState("");
    const txt = logicalOperationProp;

    function addImageToDisplayWhenSubmitted() {
        if(textToDisplay!="")
            return;
        let path = ""
        switch (txt) {
            case "too small":
                path = require("../../assets/img/tooSmall.jpg")
                break;
            case "TOO BIG":
                path = require("../../assets/img/tooBig.jpg")
                break;
            case "Congratulations dude":
                path = require("../../assets/img/congratulations.jpg")
                break;
        }
        return (
            createRow(
                <Image
                    source={path}
                    style={{
                        width: 150,
                        height: 150,
                        marginTop: 25,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: 'gray'
                    }}
                />
            , '25%')
        )
    }


    return (
        <View>
            <Text style={{textAlign: 'center'}}>{txt}</Text>
            {addImageToDisplayWhenSubmitted()}
        </View>
    )
};

export default TextDisplay;
