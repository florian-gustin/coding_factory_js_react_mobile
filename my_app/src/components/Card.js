import React, { useState, useEffect} from 'react';
import {Avatar, Button, Card, Title, Paragraph, IconButton, Colors} from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'

const MyComponent = () => {
  const { navigate } = useNavigation();

  const [favoriteStatus, setFavoriteStatus] = useState(false);

  return(
  <Card>

    <TouchableOpacity
        onPress={() => {
          setFavoriteStatus(!favoriteStatus);
        }
      }
    >
      <Card.Title title="Harry Potter : wizard's school" subtitle="Movie" left={(props) => <Avatar.Icon {...props} icon="star-outline" style={{backgroundColor: (favoriteStatus==false? 'gray' : 'orange')}} />} />
      {/*<Card.Content>*/}
      {/*  <Title>Card title</Title>*/}
      {/*  <Paragraph>Card content</Paragraph>*/}
      {/*</Card.Content>*/}
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigate('Details', {
          currentId: 12,
        });
      }}
    >
      <Card.Cover source={{ uri: 'https://picsum.photos/500' }} />
      {/*<Card.Content>*/}
      {/*  <Title>Card title</Title>*/}
      {/*  <Paragraph>Card content</Paragraph>*/}
      {/*</Card.Content>*/}
    </TouchableOpacity>
    {/*<Card.Actions>*/}


    {/*</Card.Actions>*/}
  </Card>
)};

const styles = StyleSheet.create({

})

export default MyComponent;
