import React, {useState} from 'react'
import {SafeAreaView} from 'react-native'
import TextInput from '../components/TextInput.js'
import TextDisplay from "../components/TextDisplay";

const ExerciceScreen = () => {

    const [numberToFind, setNumberToFind] = useState(() => {
        return getRandomInt(10);
    });
    const [text, setText] = useState("");

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const handleChange = (e) => setText(e);

    console.log(numberToFind);
    console.log(text);

    function logicalOperation() {
        let msg = "";
        if(text == "") 
            return;

        if(text < numberToFind) {
            msg = "This number is too small compare to answer"
        }else if(text > numberToFind) {
            msg = "This number is too big compare to answer"
        }else if(text == numberToFind) {
            msg = "Congratulations dude";
        }else {
            msg = "";
        }
        console.log("msg", msg);

        return msg;

    }

    return(
        <SafeAreaView>
            <TextInput
                callbackFromExercice={handleChange}
            />
            <TextDisplay logicalOperationProp={logicalOperation()} />
        </SafeAreaView>
    )
}

export default ExerciceScreen;