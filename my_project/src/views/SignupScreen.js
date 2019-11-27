import React, {useState} from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { addUser } from "../actions";
import { username, password } from '../actions';
import auth from '@react-native-firebase/auth';


const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: "100%"
    },
    container: {
      flex: 1,
      paddingLeft: 0,
      padding: 20,
      width: "100%",
      maxWidth: 340,
      alignSelf: "center",
      alignItems: "center",
    },
    header : {
        fontSize: 24,
        color: "#9c27b0"
    },
    text: {
        width: "100%",
        paddingBottom: 5
      },
      image: {
        flex: 1,
        width: null,
        height: null,
    },
    error: {
        textAlign: 'center',
        fontSize: 14,
        color: "red",
        marginTop: 10,
    }
  });

const SignupScreen = ({navigation}) => {
  const state = useSelector(state => state.signReducer);
  const dispatch = useDispatch();
  const [msgError, setMsgError] = useState('');

  let error = false

    // subscribe an account email & password
    async function register() {
        try {
            await auth().createUserWithEmailAndPassword(state.username, state.password)
                .then(() => navigation.navigate("Signin"))
        } catch (e) {
            handleErrorMsg(e.message)
        }
    }

    // displaying errors messages
    const handleErrorMsg = (msg) => {
        let str = msg
        let res = ""
        console.log(str)
        if(str=="[auth/weak-password] The given password is invalid. [ Password should be at least 6 characters ]")
            res = "Password is invalid, at least 6 characters."

        if(str=="[auth/invalid-email] The email address is badly formatted.")
            res = "Email address is badly formatted."

        if(str=="[auth/email-already-in-use] The email address is already in use by another account.")
            res = "Email address is already used."

        setMsgError(res)
    }

    return(
        <ImageBackground
        source={require("../assets/register.jpg")}
        resizeMode="cover"
        style={styles.background}>

            <View style={styles.container}>
                <Text style={styles.header}>Register</Text>
                <TextInput
                    style={styles.text}
                    label='Email'
                    value={state.username}
                    mode="outlined"
                    selectionColor="#9c27b0"
                    underlineColor="transparent"
                    onChange={(t) => dispatch(username(t.nativeEvent.text))}
                />
                <TextInput
                    style={styles.text}
                    label='Password'
                    value={state.password}
                    onChange={(t) => dispatch(password(t.nativeEvent.text))}
                    keyboardType="visible-password"
                    mode="outlined"
                    selectionColor="#9c27b0"
                    underlineColor="transparent"
                />
                  <Button style={{width:200}} mode="contained" onPress={() => {
                    if(state.username != "" && state.password) {
                      dispatch(addUser({
                        username: state.username,
                        password: state.password
                      }));
                      // add logs to store then go to SignIn

                        register()

                    }

                  }} >
                    Create my account
                  </Button>
                  <Button  mode="text" onPress={() => navigation.navigate("Signin") }>
                    You have already an account ?
                  </Button>
                <Text style={styles.error}>{msgError}</Text>
            </View>
        </ImageBackground>
    );
}

export default SignupScreen;
