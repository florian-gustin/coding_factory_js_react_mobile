import React, { useState, useEffect, useContext} from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, IconButton, Colors } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from "../actions";

const Favorite = ({item}) => {
  // let { state, dispatch } = useContext(User);

  const data = item
  const dispatch = useDispatch();


  function deleteThisFavorite() {
    dispatch(removeFavorite(data))

    // setSearchedText();
  }

  // function setFavorites(text) {
  //   dispatch({ type: 'updateMyFavorites', payload: text })
  // }

  // function setSearchedText() {
  //   dispatch({ type: 'updateSearchedText', payload: "" })
  // }

  return (
    <View style={{ width : 400, marginBottom: 5, marginTop: 5}}>
      <Card style={{ borderWidth: 0.5, borderColor: 'lightgray', elevation: 5}}>
        <Card.Content>
          <View style={{flexDirection: "row"}}>
            <View style={{width : '80%', justifySelf: 'center'}}>
              <TouchableOpacity

              >
                <Title style={{fontSize: 14, textTransform: 'uppercase'}}>{item.title}</Title>
              </TouchableOpacity>
            </View>
            <View style={{width : '20%',flexDirection: 'row', justifyContent: 'flex-end'}}>
              <IconButton
                icon="delete"
                color={Colors.red500}
                size={20}
                onPress={() => {
                  deleteThisFavorite()
                }}
              />
            </View>



          </View>
        </Card.Content>
      </Card>
    </View>

  )
}
export default Favorite;
