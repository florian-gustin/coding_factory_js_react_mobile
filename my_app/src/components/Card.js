import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const MyComponent = () => (
  <Card>
    <TouchableOpacity>
    <Card.Title title="Harry Potter : wizard's school" subtitle="Movie" left={(props) => <Avatar.Icon {...props} icon="movie" style={{backgroundColor: 'orange'}} />} />
    <Card.Cover source={{ uri: 'https://picsum.photos/500' }} />
    {/*<Card.Content>*/}
    {/*  <Title>Card title</Title>*/}
    {/*  <Paragraph>Card content</Paragraph>*/}
    {/*</Card.Content>*/}
    </TouchableOpacity>
    <View style={{justifyContent: 'space-around', flexDirection: 'row', padding: 5}}>
      <Button color="gray">Favorite</Button>
      <Button color="orange"
       onPress={() => console.log('Pressed')}
      >Description</Button>
    </View>
    {/*<Card.Actions>*/}


    {/*</Card.Actions>*/}
  </Card>
);

const styles = StyleSheet.create({

})

export default MyComponent;
