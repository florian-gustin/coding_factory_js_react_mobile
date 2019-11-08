import React, { } from 'react';
import { Searchbar } from 'react-native-paper';
import {useDispatch} from "react-redux";
import {addText} from "../actions";

const Search = () => {
  const dispatch = useDispatch();

  function setText(text) {
    dispatch(addText(text))
  }
  return(
    <Searchbar
      placeholder="Search"
      onChangeText={query => setText(query)}
    />
  )
}

export default Search;
