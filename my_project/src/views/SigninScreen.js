import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {username, password, clearSign, setMessage, setLogged, addUser, addFavorite, setFavorite} from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import {signInUser, getDataFromFirestore} from '../helpers/vendors/Firebase'
import i118n from '../components/i118n';

import { useDarkMode, useDarkModeContext } from 'react-native-dark-mode'

const styles = StyleSheet.create({
    background: {
      flex:1,
      width: "100%",
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

const SigninScreen = ({navigation}) => {
    navigation.navigationOptions = {
      header: 'none',
      };

navigation.navigationOptions = {
  header: 'none',
  };
    const darkMode = useSelector(state => state.darkModeReducer);
    
    // stored logins
    const state = useSelector(state => state.signReducer);
    console.log(state.email);
    //const user = useSelector(state => state.usersReducer).username
    const dispatch = useDispatch();

    console.log("appel ?");

    // call crud firebase auth (signIn)
    // store user
    const mySignin = async () => {
      const tmp = await signInUser(dispatch(setLogged(true)), dispatch(setMessage("")), navigation, state.email, state.password);
      if(tmp==false){
          dispatch(setMessage("Username not found or wrong password"))
      }else {
          dispatch(addUser({ username : state.email, password : state.password}))
          getDataFromFirestore(state.email).then((res) => dispatch(setFavorite(res)));
      }
    }

    return(
        <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="repeat"
        style={{backgroundColor: (darkMode) ? "black": "white", flex:1}}>
            <View style={styles.container}>
            <Text>{state.message}</Text>
                <Text style={styles.header}>{i118n.t("signin.welcome")}</Text>
                <TextInput
                    style={styles.text}
                    label={i118n.t("signin.labelUsername")}
                    value={state.email}
                    mode="outlined"
                    selectionColor="#9c27b0"
                    underlineColor="transparent"
                    onChange={(t) => dispatch(username(t.nativeEvent.text))}
                    // add username to store
                />
                <TextInput
                    style={styles.text}
                    label={i118n.t("signin.labelPassword")}
                    value={state.password}
                    onChange={(t) => dispatch(password(t.nativeEvent.text))}
                    // add password to store
                    keyboardType="visible-password"
                    mode="outlined"
                    selectionColor="#9c27b0"
                    underlineColor="transparent"
                />
                  <Button style={{width:200}} mode="contained" onPress={async () => {
                    mySignin()
                  }}>
                    {i118n.t("signin.signinBtn")}
                  </Button>
                  <Button  mode="text" onPress={() => {
                    dispatch(clearSign())
                    navigation.navigate("Signup")
                   } }>
                    {i118n.t("signin.orSignup")}
                  </Button>

            </View>
        </ImageBackground>
    );

}



export default SigninScreen;
