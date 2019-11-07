//This is an example code for Bottom Navigation//
import React, { } from 'react';

//import react in our code.
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Search from '../components/Search';
//import all the basic component we have used

const HomeScreen = () => {

  return (
    <SafeAreaView style={{flex: 1 }}>
      <Text>Wesh alors ?</Text>
    </SafeAreaView>

  )
}

HomeScreen.navigationOptions = ({navigation}) => {
  drawerLabel : "Home"
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  box: {
    width: "100%",
    padding: 5,
  }
});
 export default HomeScreen;