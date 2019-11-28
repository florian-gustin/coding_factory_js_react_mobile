import React, { useState } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Paragraph, Divider } from 'react-native-paper';
import {ScrollView} from 'react-navigation';
import { useNavigationParam } from 'react-navigation-hooks';
import { getTrailersFromMovie } from '../helpers/vendors/TMDB';
import YouTube from 'react-native-youtube';
import { YOUTUBE_API_KEY } from '../helpers/vendors/YoutubeApiKey';


const DetailsScreen = () => {
  const data = useNavigationParam('data');

  const [movie, setMovie] = useState(0);

  getTrailersFromMovie(data.id).then((res) => {
    if(res.results.length > 0) {
      setMovie(res.results[0].key);
      console.log("movie", movie);

    }
  });


  return (
    <ScrollView style={{ flex: 1, width: '100%', padding: 5 }}>
      {movie != 0 ? (
              <YouTube
              apiKey={YOUTUBE_API_KEY}
              videoId={movie} // The YouTube video ID
              play // control playback of video with true/false
              // control whether the video should play in fullscreen or inline
              loop // control whether the video should loop when ended
              style={{ alignSelf: 'stretch', height: 300 }}
              />
      ) : (
        <ImageBackground source={{ uri: data.poster }} style={{width: '100%', height: 400}}>
      </ImageBackground>
      )}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
        <Text style={{fontSize: 20}}>{data.title}</Text>
        <Text style={{fontSize: 14}}>{data.date}</Text>
      </View>
      <Divider></Divider>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 12, backgroundColor: 'gray'}}>
        <Text style={{fontSize: 10, color: 'white'}}>{data.popularity}</Text>
        <Text style={{fontSize: 12, fontStyle: 'italic', color: 'white'}}>{data.vote_average}</Text>
      </View>
      <Divider></Divider>
      <View style={{padding: 10}}>
        <Paragraph style={{lineHeight: 22}}>
           {data.content}
        </Paragraph>
      </View>
    </ScrollView>

  )
}

export default DetailsScreen;

