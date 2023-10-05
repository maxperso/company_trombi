import {View} from "react-native";
import TicTacToe from "./TicTacToe";
import React from "react";


export default function TicTacSquare({ currentTheme, changeTheme }) {

    return (
        <View style={{backgroundColor: currentTheme.colors.primary, borderRadius: 20, height: 250, width: 250, padding: 20, marginTop: 20, marginLeft: 10}}>
            <TicTacToe currentTheme={currentTheme} changeTheme={changeTheme} />
        </View>
    )
}