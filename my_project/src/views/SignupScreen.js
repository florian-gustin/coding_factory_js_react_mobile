import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { addUser } from "../actions";
import { username, password } from '../actions';
import i118n from '../components/i118n';


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
    }
  });

const SignupScreen = ({navigation}) => {
  const state = useSelector(state => state.signReducer);
  const dispatch = useDispatch();
    return(
        <ImageBackground
        source={require("../assets/register.jpg")}
        resizeMode="cover"
        style={styles.background}>

            <View style={styles.container}> 
                <Text style={styles.header}>{i118n.t("signup.title")}</Text>
                <TextInput
                    style={styles.text}
                    label={i118n.t("signin.labelUsername")}
                    value={state.username}
                    mode="outlined"
                    selectionColor="#9c27b0"
                    underlineColor="transparent"
                    onChange={(t) => dispatch(username(t.nativeEvent.text))}
                />
                <TextInput
                    style={styles.text}
                    label={i118n.t("signin.labelPassword")}
                    value={state.password}
                    onChange={(t) => dispatch(password(t.nativeEvent.text))}
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
                      navigation.navigate("Signin")
                    }
                    
                  }} >
                    {i118n.t("signup.create")}
                  </Button>
                  <Button  mode="text" onPress={() => navigation.navigate("Signin") }>
                    {i118n.t("signup.alreadyAccount")}
                  </Button>

            </View>
        </ImageBackground>
    );
}

export default SignupScreen;