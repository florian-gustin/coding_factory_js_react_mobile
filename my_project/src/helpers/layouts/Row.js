import React from 'react';
import {View} from 'react-native';

export function Row(value, {height = '', width = '', flex = '', justifyContent = '', alignItems = '', flexDirection = '', margin = '', padding = '', backgroundColor = ''}) {
    return <View style={{
        height: height,
        width: width,
        flex: flex,
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
        margin: margin,
        padding: padding,
        backgroundColor: backgroundColor
    }}>{value}</View>;
}
