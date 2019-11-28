import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import i118n from '../components/i118n';
import {useDispatch, useSelector} from 'react-redux';


const style = StyleSheet.create({
  header : {
      fontSize: 24,
      color: "#9c27b0"
  },
  text: {
      width: "50%",
      alignItems: "center",
      paddingBottom: 5,
      color: 'grey',

    },
    text2: {
      width: "35%",
      alignItems: "center",
      paddingBottom: 5,
      color: 'grey',

    },
});

const AboutScreen = () => {

  const darkMode = useSelector(state => state.darkModeReducer);

  return (
    <View style={{flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: (darkMode) ? "black": "white"}}>
      <Text style={style.header}>{i118n.t("about.credit")}</Text>
      <Text style={style.text2}>{i118n.t("about.licensing")}</Text>
      <Text style={style.text}>Release date: 7 November 2019</Text>
      <Text style={style.text}>{i118n.t("about.github")}</Text>
    </View>

  )
} 

 export default AboutScreen;