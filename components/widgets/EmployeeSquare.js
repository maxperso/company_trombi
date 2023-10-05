import {Text, View} from "react-native";
import React from "react";


export default function EmployeeSquare({currentTheme, changeTheme}) {
    return (
        <View style={{backgroundColor: currentTheme.colors.primary, borderRadius: 20, height: 250, width: 250, padding: 20, marginTop: 20, marginLeft: 10}}>
            <Text style={{fontWeight: '800', color: 'white', textAlign: 'center', fontSize: 40, marginBottom: 20}}>🥳EOTM🥳</Text>
            <View style={{backgroundColor: currentTheme.colors.secondary, borderRadius: 20, flex: 1, justifyContent: 'center'}}>
                <Text style={{fontWeight: '600', color: 'white', textAlign: 'center', fontSize: 30}}>Billy Bob</Text>
                <Text style={{fontWeight: '600', color: 'white', textAlign: 'center', fontSize: 30}}>CEO</Text>
            </View>
        </View>
    )
}
