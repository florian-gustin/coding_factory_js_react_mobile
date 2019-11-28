import React, { } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Paragraph, Divider } from 'react-native-paper';
import {ScrollView} from 'react-navigation';
import { useNavigationParam } from 'react-navigation-hooks'

import {useDispatch, useSelector} from 'react-redux';

const DetailsScreen = () => {
  const data = useNavigationParam('data');
  const darkMode = useSelector(state => state.darkModeReducer);


  return (
    <ScrollView style={{ flex: 1, width: '100%', padding: 5, backgroundColor : (darkMode) ? "black": "white"}}>
      <ImageBackground source={{ uri: data.poster }} style={{width: '100%', height: 400}}>
      </ImageBackground>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
        <Text style={{fontSize: 20, color:  (darkMode) ? "white": "black"}}>{data.title}</Text>
        <Text style={{fontSize: 14, color:  (darkMode) ? "white": "black"}}>{data.date}</Text>
      </View>
      <Divider></Divider>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 12, backgroundColor: 'gray'}}>
        <Text style={{fontSize: 10, color: 'white'}}>{data.popularity}</Text>
        <Text style={{fontSize: 12, fontStyle: 'italic', color: 'white'}}>{data.vote_average}</Text>
      </View>
      <Divider></Divider>
      <View style={{padding: 10}}>
        <Paragraph style={{lineHeight: 22, color:  (darkMode) ? "white": "black"}}>
           {data.content}
        </Paragraph>
      </View>
    </ScrollView>

  )
}

export default DetailsScreen;

