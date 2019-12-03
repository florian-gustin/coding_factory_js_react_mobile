import React, { useState, useEffect} from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import Favorite from '../components/Favorite';


const ProfileScreen = () => {
  const darkMode = useSelector(state => state.darkModeReducer);


  const state = useSelector(state => state.favoritesListReducer).favorites
  console.log("state favorite", state);
  //const user = useSelector(state => state.usersReducer).username

  //const [favList, setFavList] = useState(false)

  // loading
  // useEffect(() => {
  //   getAllFavorites()
  // })

  // // get the list of favorites from firestore
  // const getAllFavorites = async() => {
  //   const tmp = await getDataFromFirestore(user)
  //   if(tmp.length>0)
  //     setFavList(tmp)
  // }

  // generate the flatList of favorites
  function listOfFavorites() {
    return (
        <FlatList
            data={state}
            renderItem={({item}) => <Favorite item={item}/> }
            keyExtractor={item => item.idFromApi}
        />
    )
  }

  return(
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center',
                          backgroundColor: (darkMode) ? "black": "white"}}>
      {listOfFavorites()}
    </SafeAreaView>
  )
}

export default ProfileScreen;
