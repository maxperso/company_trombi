import React, {useState} from 'react';
import { Text, View, Image } from 'react-native'; // Import Image component
import { Button } from "native-base";
import * as SecureStore from "expo-secure-store";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Dice from "./Dice";
import Settings from "./Settings";
import Company from "./Company";
import { StatusBar } from "expo-status-bar";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Animated } from "react-native";
import { theme1, theme2, theme3, theme4, theme5 } from '../components/Theme'; // Import the themes you created

const av = new Animated.Value(0);
av.addListener(() => {});

const Tab = createMaterialTopTabNavigator();

export default function Content({ navigation }) {
    const [currentTheme, setCurrentTheme] = useState(theme1); // Initialize with theme1

    const changeTheme = (newTheme) => {
        setCurrentTheme(newTheme);
    };

    async function deleteToken(token) {
        await SecureStore.deleteItemAsync(token);
        navigation.navigate('Onboarding');
    }

    return (
        <View style={{flex: 1, backgroundColor: currentTheme.colors.primary}}>
            <Tab.Navigator theme={currentTheme}
                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: currentTheme.colors.primary, paddingTop: 10, borderRadius: 20 },
                    tabBarLabel: '',
                    tabBarIndicatorStyle: { backgroundColor: '#000000', opacity: 0, height: "20%", borderRadius: 20 },
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Photos') {
                            iconName = focused ? require('../assets/DiceEmployeesActive.png') : require('../assets/DiceEmployeeInactive.png');
                        } else if (route.name === 'Dice') {
                            iconName = focused ? require('../assets/DiceDice.png') : require('../assets/DiceDiceInactive.png');
                        } else if (route.name === 'Settings') {
                            iconName = focused ? require('../assets/DiceSettings.png') : require('../assets/DiceSettingsInactive.png');
                        }

                        // You can return an Image component with the appropriate icon
                        return <Image source={iconName} style={{ width: 24, height: 24 }} />;
                    },
                })}
                tabBarPosition={'bottom'}>
                <Tab.Screen name="Photos"
                            children={()=><Company currentTheme={currentTheme} changeTheme={changeTheme}/>}/>
                <Tab.Screen name="Dice" children={()=><Dice currentTheme={currentTheme} changeTheme={changeTheme}/>}/>
                <Tab.Screen name="Settings" children={()=><Settings currentTheme={currentTheme} changeTheme={changeTheme}/>}/>
            </Tab.Navigator>
            <StatusBar style={"light"} />
        </View>
    );
}
