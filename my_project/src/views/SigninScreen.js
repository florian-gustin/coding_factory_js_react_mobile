import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { TextInput } from 'react-native-paper';
import { Container } from "../helpers/layouts/Container";

const styles = StyleSheet.create({
    forgotPassword: {
      width: "100%",
      alignItems: "flex-end",
      marginBottom: 24
    },
    row: {
      flexDirection: "row",
      marginTop: 4
    },
    label: {
      color: theme.colors.secondary
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary
    }
  });

const SigninScreen = () => {
    return (
        <>
        <View style={styles}>
            <View style={{width: 100}}>
                <TextInput
                 placeholder={"Email"}
                 />
            </View>
            <View>
                <TextInput
                 placeholder={"Email"}
                 />
            </View>
            <View>
                <TextInput
                 placeholder={"Password"}
            />
            </View>
        </View>
      </>
    )
}

export default SigninScreen;