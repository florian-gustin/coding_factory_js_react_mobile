/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import DrawerNavigation from './src/navigations';
import SigninScreen from './src/views/SigninScreen';
import SafeAreaView from 'react-native-safe-area-view';
import allReducers from "./src/reducers/";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(allReducers)

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
        <DrawerNavigation />
      </Provider>
  );
};


export default App;
