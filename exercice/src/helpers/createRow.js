import React from 'react';
import {View} from 'react-native';

export function createRow(value, height) {
  let newHeight = '';

  if (height != null) {
    newHeight = height;
  }

  return <View style={{height: newHeight}}>{value}</View>;
}
