import React, { useState, useEffect} from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import Favorite from '../components/Favorite';
import {
  getRowFromFirestore,
  addtoFirestore,
  deleteFromFirestore,
  getDataFromFirestore
} from '../helpers/vendors/Firebase'


const ProfileScreen = () => {

  const state = useSelector(state => state.favoritesListReducer)
  const user = useSelector(state => state.usersReducer).username

  const [favList, setFavList] = useState("")

  // loading
  useEffect(() => {
    getAllFavorites()
  })

  // get the list of favorites from firestore
  const getAllFavorites = async() => {
    const tmp = await getDataFromFirestore(user)
    setFavList(tmp)
  }

  // generate the flatList of favorites
  function listOfFavorites() {
    return (
      <FlatList
        data={favList}
        renderItem={({item}) => <Favorite item={item}/> }
        keyExtractor={item => item.idFromApi.toString()}
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
