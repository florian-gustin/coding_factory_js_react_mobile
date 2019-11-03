//This is an example code for Bottom Navigation//
import React, { useState, useEffect, useContext} from 'react';
//import react in our code.
import { FlatList, SafeAreaView, Text,  } from 'react-native';
import {User} from '../contexts/UserContext';
import Card from 'react-native-paper';
import Favorite from '../components/Favorite';
//import all the basic component we have used

const ProfileScreen = () => {

  let { state, dispatch } = useContext(User);

  function listOfFavorites() {
    return (
      <FlatList
        data={state.myFavorites}
        renderItem={({item}) => <Favorite item={item}/> }
        keyExtractor={item => item.id.toString()}
      />
    )
  }

  return(
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {listOfFavorites()}
    </SafeAreaView>
  )
}

export default ProfileScreen;
