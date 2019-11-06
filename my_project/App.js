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


const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{alignItems: "center", justifyContent: "center"}}>
      <SigninScreen />
    </SafeAreaView>
  );
};


export default App;
