import React, { } from 'react';
import {Avatar, Card} from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../actions";


const MyComponent = ({item}) => {
  const dispatch = useDispatch()
  const data = item
  const { navigate } = useNavigation();

  const myFavorites = useSelector(state => state.favoritesListReducer)


  function handleFavorite() {

    if(myFavorites.favorites.length == 0) {
      dispatch(addFavorite(data))
      return;
    }
    let result = myFavorites.favorites.filter((element) => {
      return data.title.indexOf(element.title) !== -1
    });

    if(result.length > 0) {

      dispatch(removeFavorite(data))


    }else {
      dispatch(addFavorite(data))

    }
  }

    function generateIconColor() {

      let result = myFavorites.favorites.filter((element) => {
        return data.id.toString().indexOf(element.id) !== -1
      });

      return (
          <Card.Title title={data.title} subtitle={data.vote_average} left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: (result.length == 1) ? "orange": "gray"}} />} />
      )
  }


  return(
  <Card style={{backgroundColor: 'white', marginBottom: 5, elevation: 5}}>

    <TouchableOpacity
        onPress={() => {
          handleFavorite()
        }
      }
    >
      {generateIconColor()}
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigate('Detail', {
          data: data,
        });
      }}
    >
       <Card.Cover source={{ uri: data.poster }} />
    </TouchableOpacity>
  </Card>
)};


export default MyComponent;
