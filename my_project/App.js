/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import DrawerNavigation from './src/navigations';
import allReducers from "./src/reducers/";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {DarkModeProvider} from 'react-native-dark-mode';
import { Provider as PaperProvider } from 'react-native-paper';

const store = createStore(allReducers)

const App: () => React$Node = () => {
  return (
      <Provider store={store}>
        <DarkModeProvider mode="dark">
          <PaperProvider>
          <DrawerNavigation />
          </PaperProvider>
        </DarkModeProvider>
      </Provider>
  );
};


export default App;
