import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import i118n from '../components/i118n';


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
      <Text style={style.header}>{i118n.t("about.credit")}</Text>
      <Text>{i118n.t("about.licensing")}</Text>
      <Text>Release date: 7 November 2019</Text>
      <Text>{i118n.t("about.github")}</Text>
    </SafeAreaView>

  )
} 

 export default AboutScreen;