//This is an example code for Bottom Navigation//
import React, { useState, useEffect} from 'react';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'

//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Button, FlatList } from 'react-native';
import Searchbar from '../components/Searchbar';
import Card from '../components/Card';
import {ScrollView} from 'react-navigation';
//import all the basic component we have used



const HomeScreen = () => {
  const [foo, setFoo] = useState(30);

  const { navigate } = useNavigation();

  useEffect(() => {
    if (foo >= 42) {
      setFoo(42);
    }
  }, [foo])

  return (
    <ScrollView style={{ }}>
      <View style={styles.box}>
        <Searchbar/>
      </View>

      <View style={styles.box}>
        <Card/>
      </View>
      <View style={styles.box}>
        <Card/>
      </View>
      <View style={styles.box}>
        <Card/>
      </View>

      <FlatList/>
      {/*<View*/}
      {/*  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>*/}
      {/*  /!*<TouchableOpacity*!/*/}
      {/*  /!*  style={styles.button}*!/*/}
      {/*  /!*  onPress={() => this.props.navigation.navigate('Settings')}>*!/*/}
      {/*  /!*  <Text>Go to settng Tab</Text>*!/*/}
      {/*  /!*</TouchableOpacity>*!/*/}
      {/*  /!*<TouchableOpacity*!/*/}
      {/*  /!*  style={styles.button}*!/*/}
      {/*  /!*  onPress={() => this.props.navigation.navigate('Details')}>*!/*/}
      {/*  /!*  <Text>Open Details Screen</Text>*!/*/}
      {/*  /!*</TouchableOpacity>*!/*/}
      {/*</View>*/}
      {/*<View>*/}
      {/*  <Text>Foo is {foo}.</Text>*/}
      {/*  <Button onPress={() => setFoo(foo + 1)} title='Increase Foo!' />*/}
      {/*</View>*/}
    </ScrollView>

  )
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
 export  default HomeScreen;
