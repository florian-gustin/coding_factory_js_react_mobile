import React, {useState} from 'react'
import {Text,Button} from "react-native-paper";
import {SafeAreaView, View} from 'react-native'
import TextInput from '../components/TextInput.js'
import TextDisplay from "../components/TextDisplay";

const ExerciceScreen = () => {

    const [numberToFind, setNumberToFind] = useState(() => {
        return getRandomInt(10);
    });
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)

    const restart = () => {
        setText("")
        setCount(0)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const handleChange = (e) => setText(e);
    const handleCount = (e) => {
        if((e!="") && (e.length == 1)){
            if(validateNumber(e) == true){
                setCount(count+1)
            }
        } else {
            setCount(count)
        }
    }

    function validateNumber(strNumber) {
        var regExp = new RegExp("^\\d+$");
        var isValid = regExp.test(strNumber); // or just: /^\d+$/.test(strNumber);
        return isValid;
    }

    function logicalOperation() {
        let msg = "";
        if(text == "")
            return;

        if(text < numberToFind) {
            msg = "too small"
        }else if(text > numberToFind) {
            msg = "TOO BIG"
        }else if(text == numberToFind) {
            msg = "Congratulations dude";
        }else {
            msg = "";
        }
        console.log("msg", msg);

        return msg;

    }

    function createRow(value) {
        return(
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                {value}
            </View>
        )
    }

    return(
        <SafeAreaView style={{flex: 1, padding: 10, justifyContent: 'space-around', flexDirection: 'column'}}>
            {createRow(
                <Text style={{fontSize: 30, color: 'indigo', fontWeight: 'bold', textTransform: 'uppercase'}}>Game : "Yes or No"</Text>
            )}
            {createRow(
                <Text style={{fontSize: 12, color: 'gray', fontStyle: 'italic'}}>Find the right NUMBER between 1 and 10 !</Text>
            )}
            {createRow(
                <Text style={{fontSize: 20, color: 'indigo', fontWeight: 'bold'}}>{count}</Text>
            )}
            {createRow(
                <View style={{width: '50%'}}>
                    <TextInput
                        callbackFromExercice={handleChange}
                        callbackCount={handleCount}
                        data={text}
                    />
                </View>
            )}
            {createRow(
                <Button mode="contained" onPress={() => restart()}>
                    Restart
                </Button>
            )}
            {createRow(
                <TextDisplay logicalOperationProp={logicalOperation()} />
            )}
        </SafeAreaView>
    )
}

export default ExerciceScreen;
