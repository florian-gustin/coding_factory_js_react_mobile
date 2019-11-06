import React, { } from 'react';
import { Searchbar } from 'react-native-paper';

const Search = () => {
  /*const [textIncoming, setTextIncoming] = useState(null)
  let { state, dispatch } = useContext(User);

  // let setText = text => () => dispatch({ type: 'updateSearchedText', payload: text })

  function setText(text) {
    dispatch({ type: 'updateSearchedText', payload: text })
  }

  console.log(state) */
  return(
    <Searchbar
      placeholder="Search"
      //onChangeText={query => setText(query)}
    />
  )
}

export default Search;