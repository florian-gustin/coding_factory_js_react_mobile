import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Navigation from './src/Navigation.js';
import {UserProvider} from './src/contexts/UserContext';

export default function App() {

  return (
    <UserProvider>
      <Navigation/>
    </UserProvider>
  )
}
