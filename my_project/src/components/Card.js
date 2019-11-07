import React, { } from 'react';
import {Avatar, Button, Card, Title, Paragraph, IconButton, Colors} from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'


const MyComponent = ({item}) => {
  const data = item
  const { navigate } = useNavigation();
  console.log("les data dans CARD", data.poster)


  function generateIconColor() {
    if(data) {
      return (
          <Card.Title title={data.title} subtitle={data.vote_average} left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: 'orange'}} />} />
      )
    }else {
      return (
          <Card.Title title={data.title} subtitle={data.vote_average} left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: 'gray'}} />} />
      )
    }
  }
  /* const { navigate } = useNavigation();
  let { state, dispatch } = useContext(User);

  const data = item

  const [favoriteStatus, setFavoriteStatus] = useState(false);
  const [myFavoritesList, setMyFavoritesList] = useState(state.myFavorites);

  useEffect(() => {
    findEquals()
  }, [state.myFavorites])

  function setFavorites(text) {
    dispatch({ type: 'updateMyFavorites', payload: text })
  }

  function findEquals() {
    let myBool;
    if(!state.myFavorites) {
      for(let i = 0; i < state.myFavorites.length; i++) {
        console.log("mon store "+state.myFavorites[i].id)
        console.log("mon current "+item.id)
        if(state.myFavorites[i].id==item.id){
          myBool = true;
        } else {
          myBool = false
        }
      }
    }
    return myBool
  }


  function generateIconColor() {
    if(favoriteStatus==true) {
      return (
        <Card.Title title={data.title} subtitle={data.vote_average} left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: 'orange'}} />} />
      )
    }else {
      return (
        <Card.Title title={data.title} subtitle={data.vote_average} left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: 'gray'}} />} />
      )
    }
  }

  function handleFavorite() {
    setFavoriteStatus(!favoriteStatus);
    let list = state.myFavorites;
    switch (favoriteStatus) {
      case false :
        //add
        console.log('add')
        let column = {
          id: data.id,
          title: data.title,
        };
        list.push(column)
        break;
      case true :
        //remove
        console.log('delete')
        let array = list.filter(function(item) { return item.id != data.id });
        list = array;
        break;
    }
    setFavorites(list);
    console.log(state.myFavorites)
  } */

  return(
  <Card style={{backgroundColor: 'white', marginBottom: 5, elevation: 5}}>

    <TouchableOpacity
        onPress={() => {}
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
