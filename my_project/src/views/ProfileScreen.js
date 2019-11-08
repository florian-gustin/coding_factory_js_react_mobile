import React, { } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import Favorite from '../components/Favorite';


const ProfileScreen = () => {

  const state = useSelector(state => state.favoritesListReducer)

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