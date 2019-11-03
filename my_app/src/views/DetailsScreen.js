//This is an example code for Bottom Navigation//
import React, { useState, useEffect} from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Divider, IconButton, Colors } from 'react-native-paper';
import {ScrollView} from 'react-navigation';
import Video from 'react-native-video';

//import all the basic component we have used

const DetailsScreen = () => {
  const {navigate} = useNavigation();

  const currentId = useNavigationParam('currentId');

  console.log(currentId);

  return (
    <ScrollView style={{ flex: 1, width: '100%', padding: 5 }}>
      <ImageBackground source={{ uri: 'https://picsum.photos/700' }} style={{width: '100%', height: '100%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <IconButton
          icon="star-outline"
          color={Colors.orange500}
          size={40}
          onPress={() => console.log('Pressed')}
        />
      </View>
      </ImageBackground>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
        <Text style={{fontSize: 20}}>Harry Potter</Text>
        <Text style={{fontSize: 14}}>2018</Text>
      </View>
      <Divider></Divider>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 12, backgroundColor: 'gray'}}>
        <Text style={{fontSize: 10, color: 'white'}}>Movie : Magic, SF</Text>
        <Text style={{fontSize: 12, fontStyle: 'italic', color: 'white'}}>Steven Spielberg</Text>
      </View>
      <Divider></Divider>
      <View style={{padding: 10}}>
        <Paragraph style={{lineHeight: 22}}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Paragraph>
      </View>
      {/*<Video source={{uri: "background"}}   // Can be a URL or a local file.*/}
      {/*       ref={(ref) => {*/}
      {/*         this.player = ref*/}
      {/*       }}                                      // Store reference*/}
      {/*       onBuffer={this.onBuffer}                // Callback when remote video is buffering*/}
      {/*       onError={this.videoError}               // Callback when video cannot be loaded*/}
      {/*       style={styles.backgroundVideo} />*/}

    </ScrollView>

  )
}

export default DetailsScreen;

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
