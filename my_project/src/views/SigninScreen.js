import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
const styles = StyleSheet.create({
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

const SigninScreen = ({navigation}) => {
    return(
        <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="repeat"
        style={styles.background}>
            <View style={styles.container}> 
                <Text style={styles.header}>Welcome back.</Text>
                <TextInput
                    style={styles.text}
                    label='Email'
                    mode="outlined"
                    selectionColor="#9c27b0"
                    underlineColor="transparent"
                />
                <TextInput
                    style={styles.text}
                    label='Password'
                    keyboardType="visible-password"
                    mode="outlined"
                    selectionColor="#9c27b0"
                    underlineColor="transparent"
                />
                  <Button style={{width:200}} mode="contained" onPress={() => console.log('Pressed')}>
                    Sign in
                  </Button>
                  <Button  mode="text" onPress={() => navigation.navigate("Signup") }>
                    ... or Sign up
                  </Button>

            </View>
        </ImageBackground>
    );
}

export default SigninScreen;