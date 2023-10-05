import {Text, View} from "react-native";
import React from "react";


export default function NewsSquare({currentTheme, changeTheme}) {
    return (
        <View style={{backgroundColor: currentTheme.colors.primary, borderRadius: 20, height: 250, width: 250, padding: 20, marginTop: 20, marginLeft: 10}}>
            <Text style={{fontWeight: '800', color: 'white', textAlign: 'center', fontSize: 40, marginBottom: 20}}>NEWS🏈</Text>
            <View style={{backgroundColor: currentTheme.colors.secondary, borderRadius: 20, flex: 1, justifyContent: 'center'}}>
                <Text style={{fontWeight: '700', color: 'white', textAlign: 'center', fontSize: 30}}>FR 27-12 URU</Text>
                <Text style={{fontWeight: '500', color: 'white', opacity: 0.5, textAlign: 'center', fontSize: 20}}>(Rugby CDM)</Text>
            </View>
        </View>
    )
}
