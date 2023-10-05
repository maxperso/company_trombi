import {View} from "react-native";
import ChuckNorris from "./ChuckNorris";
import React from "react";


export default function ChuckSquare({currentTheme, changeTheme}) {
    return (
        <View style={{backgroundColor: currentTheme.colors.primary, borderRadius: 20, height: 250, width: 250, padding: 20, marginTop: 20, marginLeft: 10}}>
            <ChuckNorris currentTheme={currentTheme} changeTheme={changeTheme} />
        </View>
    )
}
