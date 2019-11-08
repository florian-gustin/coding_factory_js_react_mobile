import React, {useState} from 'react';
import {Text, Button} from 'react-native-paper';
import {SafeAreaView, View} from 'react-native';
import MyTextInput from '../components/MyTextInput.js';
import MyMessageToDisplay from '../components/MyMessageToDisplay';
import {useDispatch, useSelector} from 'react-redux';
import {clearText, resetCounter, resetNumberToFind, addHistory, isWin, isLoose} from "../actions";

const ExerciceScreen = () => {

  const numberToFind = useSelector(state => state.numberToFindReducer);
  const history = useSelector(state => state.historyReducer);
  const counter = useSelector(state => state.counterReducer);
  const win = useSelector(state => state.winReducer);


    const dispatch = useDispatch();

    function restartWriteHistoryAndClearOthers() {
        if(win==true){
            dispatch(addHistory({numbertoFound : numberToFind, winTries: counter}))
            dispatch(clearText());
            dispatch(resetCounter());
            dispatch(resetNumberToFind())
            dispatch(isLoose())
        }
  }

  function validateNumber(strNumber) {
    var regExp = new RegExp('^\\d+$');
    var isValid = regExp.test(strNumber); // or just: /^\d+$/.test(strNumber);
    return isValid;
  }

  function createRow(value) {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {value}
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
        flexDirection: 'column',
      }}>
      {createRow(
        <Text
          style={{
            fontSize: 30,
            color: 'indigo',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Game : "Yes or No"
        </Text>,
      )}
      {createRow(
        <Text style={{fontSize: 12, color: 'gray', fontStyle: 'italic'}}>
          Find the right NUMBER between 1 and 9 !
        </Text>,
      )}
      {createRow(
        <Text style={{fontSize: 20, color: 'indigo', fontWeight: 'bold'}}>
          {counter}
        </Text>,
      )}
      {createRow(
        <View style={{width: '50%'}}>
          <MyTextInput
          />
        </View>,
      )}
      {createRow(
        <Button mode="contained" onPress={() => restartWriteHistoryAndClearOthers()}>
          Restart
        </Button>,
      )}
      {createRow(<MyMessageToDisplay />)}
    </SafeAreaView>
  );
};

export default ExerciceScreen;
