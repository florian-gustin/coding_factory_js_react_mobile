//This is an example code for Bottom Navigation//
import React, { } from 'react';
//import react in our code.
import { SafeAreaView, FlatList } from 'react-native';
//import all the basic component we have used
import {useDispatch, useSelector} from 'react-redux';
import Favorite from '../components/Favorite';


const ProfileScreen = () => {

  const state = useSelector(state => state.favoritesListReducer)
  let dispatch = useDispatch();

  function listOfFavorites() {
    return (
      <FlatList
        data={state.favorites}
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