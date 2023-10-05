import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function WidgetItem({ viewableItems, currentTheme, changeTheme }) {

    return (
        <View style={{
            height: 80,
            width: '90%',
            backgroundColor: currentTheme.colors.primary,
            marginTop: 20, borderRadius: 15, alignSelf: 'center'}}/>
    )
}