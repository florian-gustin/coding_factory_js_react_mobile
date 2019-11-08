import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Card, Title, IconButton, Colors } from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {removeFavorite} from "../actions";
import { useNavigation } from 'react-navigation-hooks'

const Favorite = ({item}) => {

  const data = item
  const dispatch = useDispatch();
  const { navigate } = useNavigation();



  function deleteThisFavorite() {
    dispatch(removeFavorite(data))

  }

  return (
    <View style={{ width : 400, marginBottom: 5, marginTop: 5}}>
      <Card style={{ borderWidth: 0.5, borderColor: 'lightgray', elevation: 5}}>
        <Card.Content>
          <View style={{flexDirection: "row"}}>
            <View style={{width : '80%', justifySelf: 'center'}}>
              <TouchableOpacity
              onPress={() => {
                navigate('Detail', {
                  data: data,
                });
              } }
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
