import React, { useEffect, useState } from 'react';
import {Avatar, Card} from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import {useDispatch, useSelector} from "react-redux";
import {getRowFromFirestore,addtoFirestore,deleteFromFirestore} from '../helpers/vendors/Firebase'


const MyComponent = ({item}) => {
  const dispatch = useDispatch()
  const data = item
  const { navigate } = useNavigation();

  // quick color state hooks at grey by default
  const [iconCol, setIconCol] = useState("grey")

  useEffect(() => {
    checkStatusFavorite()
  })

  // call crud firebase (r)
  // check if exist
  // set icon color for displaying
  const checkStatusFavorite = async() => {
    const tmp = await getRowFromFirestore('tmdb', data.id.toString())

    if(tmp!=undefined) {
      setIconCol("orange")
    }
  }

  // call crud firebase (c)
  // set icon color for displaying
  const addFavoriteToFirestore = async() => {
    const tmp = await addtoFirestore('tmdb', data.id.toString(), data.id.toString(), data.title, data.poster)

    setIconCol("orange")
  }

  // call crud firebase (d)
  // set icon color for displaying
  const removeFavoriteFromFirestore = async() => {
    const tmp = await deleteFromFirestore('tmdb', data.id.toString())

    setIconCol("grey")
  }

  const darkMode = useSelector(state => state.darkModeReducer);

  return(
  <Card style={{backgroundColor: (darkMode) ? "black": "white", marginBottom: 5, elevation: 5}}>

    <TouchableOpacity
        onPress={async () => {
          (iconCol=="grey"? addFavoriteToFirestore() : removeFavoriteFromFirestore())
          // checking icon color state for setting the right func
        }
      }
    >
      <Card.Title titleStyle={{color:"grey"}} title={data.title} subtitle={data.vote_average} left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: iconCol }} />} />
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
