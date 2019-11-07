//This is an example code for Bottom Navigation//
import React, { } from 'react';
import {useDispatch, useSelector} from 'react-redux';
//import react in our code.
import { View, StyleSheet, SafeAreaView, Button, FlatList } from 'react-native';
import Card from '../components/Card'
import Search from '../components/Search';
//import {getFilmsFromSearchedText} from '../helpers/vendors/TMDB'
import {changeStatusApi, getData, removeText} from "../actions";
//import all the basic component we have used

const HomeSearchScreen = ({navigation}) => {
    const dispatch = useDispatch()

    const searchedText = useSelector(state => state.searchedTextReducer)
    console.log("le text a chercher ", searchedText)
    const data = useSelector(state => state.dataFromApiReducer).data
    const lock = useSelector(state => state.dataFromApiReducer).lock
    console.log(data)
    const statusLoading = useSelector(state => state.dataFromApiReducer).status
    console.log(statusLoading)

  /*let { state, dispatch } = useContext(User);

  const [data, setData] = useState(null);

  const { navigate } = useNavigation();

  useEffect(() => {
    if(state.searchedText) {
     loadingData()
    }
  }, [state.searchedText])
*/
  const loadingData = () => {
      if(searchedText!="" && !lock) {

          setTimeout(() => {
              console.log("api");
          }, 1000)

          /*/!*getFilmsFromSearchedText(searchedText).then(data => {
              let resp = data.results;

              let concatPosterPath = "http://image.tmdb.org/t/p/w1280/"
              let list = []

              for(let i = 0; i < resp.length ; i++) {
                  let dateTmp = resp[i].release_date
                  let dateFormat = dateTmp.substring(0, 4)
                  let format = {
                      id: resp[i].id,
                      title: resp[i].original_title,
                      date : dateFormat,
                      vote_average : resp[i].vote_average,
                      popularity: resp[i].popularity,
                      content : resp[i].overwiew,
                      poster: concatPosterPath+""+resp[i].poster_path,
                  }
                  list.push(format);
              }
              console.log(list)
              dispatch(getData(list))
              dispatch(removeText())*!/
          });*/
      }
  }

  const cardGenerator = () => {
    if(statusLoading==false) {
        //dispatch(changeStatusApi())
        //console.log("ya de la data", data)
      return (
        <FlatList
          data={data}
          renderItem={({item}) => <Card item={item}/> }
          keyExtractor={item => item.id.toString()}
        />
      )
    }else {
        loadingData()
    }
  }

  return (
    <SafeAreaView style={{flex: 1 }}>
      <View style={styles.box}>
          <Search/>
      </View>
      <View style={styles.box}>
      </View>
      <View style={styles.box}>
         hello
      </View>
      {/*<Button onPress={() => {*/}
      {/*  navigation.toggleDrawer();*/}
      {/*}} title="Hello" />*/}
    </SafeAreaView>

  )
}

HomeSearchScreen.navigationOptions = ({navigation}) => {
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
 export default HomeSearchScreen;
