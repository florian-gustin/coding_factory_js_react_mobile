//This is an example code for Bottom Navigation//
import React, { } from 'react';

//import react in our code.
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import Search from '../components/Search';
//import all the basic component we have used

const style = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  header : {
      fontSize: 24,
      color: "#9c27b0"
  },
  text: {
      width: "100%",
      paddingBottom: 5
    },
});

const AboutScreen = () => {

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.header}>Made by Florian & Cedric</Text>
      <Text>For Coding Factory</Text>
      <Text>Release date: 7 November 2019</Text>
      <Text>Github: flow2dot0/CedricLPHN</Text>

    </SafeAreaView>

  )
}

AboutScreen.navigationOptions = ({navigation}) => {
  drawerLabel : "About this project"
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
 export default AboutScreen;