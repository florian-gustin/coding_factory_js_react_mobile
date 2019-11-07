import React, { } from 'react';
import { Searchbar } from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import {addText} from "../actions";

const Search = () => {
  const dispatch = useDispatch();
  const textIncoming = useSelector(state => state.searchedTextReducer)

  function setText(text) {
    console.log("l'entrée est : ", text)
    dispatch(addText(text))
    console.log(textIncoming)
  }
  return(
    <Searchbar
      placeholder="Search"
      onChangeText={query => setText(query)}
    />
  )
}

export default Search;
