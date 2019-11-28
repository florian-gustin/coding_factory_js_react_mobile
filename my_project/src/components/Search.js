import React, { } from 'react';
import { Searchbar } from 'react-native-paper';
import {useDispatch} from "react-redux";
import {addText} from "../actions";

import i118n from '../components/i118n';


const Search = () => {
  const dispatch = useDispatch();

  function setText(text) {
    dispatch(addText(text))
  }
  return(
    <Searchbar
      placeholder={i118n.t("search.placeholder")}
      onChangeText={query => setText(query)}
    />
  )
}

export default Search;
