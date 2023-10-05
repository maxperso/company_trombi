import React, {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from "./pages/Onboarding";
import Content from "./pages/Content";
import {extendTheme, NativeBaseProvider} from "native-base";
import Login from "./pages/Login";
import * as SecureStore from "expo-secure-store";
import { GROUP_AUTHORIZATION } from '@env';
import ChatScreen from './pages/Tchat';

const Stack = createNativeStackNavigator();


const theme = extendTheme({
    colors: {
        primary: '#414141', // Default button color
        color1: '#69ABA5', // Color 1
        color2: '#628470', // Color 2
        color3: '#D1CABD', // Color 3
        color4: '#A491A6', // Color 4
        color5: '#B4BDD9', // Color 5
    },
});


export default function App() {
    const [token, setToken] = React.useState(null);

    useEffect(() => {
        SecureStore.getItemAsync('token').then((token) => {
            if (token) {
                setToken(token);
            }
        });
    }, [token]); // The empty dependency array means this effect runs only once

    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Onboarding" component={Onboarding} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name={"Content"} component={Content} />
                    <Stack.Screen name={"Tchat"} component={ChatScreen} />
                </Stack.Navigator>
                <StatusBar style={"light"}/>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
