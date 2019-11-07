import React, { } from 'react';
import {Avatar, Button, Card, Title, Paragraph, IconButton, Colors} from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
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
      console.log("ya rien du tout a la base", myFavorites.favorites)
      return;
    }
    let result = myFavorites.favorites.filter((element) => {
      return data.title.indexOf(element.title) !== -1
    });

    if(result.length > 0) {

      dispatch(removeFavorite(data))

      console.log("on supprime", myFavorites.favorites)

    }else {
      dispatch(addFavorite(data))
      console.log("on rajoute", myFavorites.favorites)

    }
  }

    function generateIconColor() {
/*    if(myFavorites.favorites.length>0){
      for(let i = 0; i < myFavorites.favorites.length ; i++){
        if(myFavorites.favorites['title']==data.title){
          return (
              <Card.Title title={data.title} subtitle={data.vote_average} left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: 'orange'}} />} />
          )
        }
        else if(myFavorites.favorites['title']!=data.title){
          return (
              <Card.Title title={data.title} subtitle={data.vote_average} left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: 'gray'}} />} />
          )
        }
      }
    } else {*/
      let result = myFavorites.favorites.filter((element) => {
        console.log("oh");
        return data.title.indexOf(element.title) !== -1
      });
      return (
          <Card.Title title={data.title} subtitle={data.vote_average} left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: (result.length > 0) ? "orange": "gray"}} />} />
      )
    //}
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
