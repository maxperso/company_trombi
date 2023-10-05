import React from 'react';
import { Text, View } from 'react-native';
import { Button, Divider, NativeBaseProvider } from 'native-base';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { theme1, theme2, theme3, theme4, theme5 } from '../components/Theme'; // Import the themes you created

export default function Settings({ currentTheme, changeTheme }) {
    const navigation = useNavigation();

    async function deleteToken(token) {
        await SecureStore.deleteItemAsync(token);
        navigation.navigate('Onboarding');
    }

    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, backgroundColor: '#212121' }}>
                <View className={'Title'} style={{ flex: 1, alignItems: 'center' }}>
                    <Text
                        style={{
                            marginTop: 80,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 40,
                        }}
                    >
                        Settings
                    </Text>
                </View>
                <View className={'Theme'} style={{ flex: 3, margin: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>THEME</Text>
                    <Divider style={{ width: '70%' }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Button
                            style={{
                                borderRadius: 100,
                                backgroundColor: theme1.colors.primary,
                                width: 30,
                                height: 30,
                                margin: 10,
                                borderWidth: currentTheme === theme1 ? 3 : 0, // Add border for the selected color
                                borderColor: '#FFFFFF', // You can change the border color as needed
                            }}
                            onPress={() => changeTheme(theme1)}
                        />
                        <Button
                            style={{
                                borderRadius: 100,
                                backgroundColor: theme2.colors.primary,
                                width: 30,
                                height: 30,
                                margin: 10,
                                borderWidth: currentTheme === theme2 ? 3 : 0,
                                borderColor: '#FFFFFF',
                            }}
                            onPress={() => changeTheme(theme2)}
                        />
                        <Button
                            style={{
                                borderRadius: 100,
                                backgroundColor: theme3.colors.primary,
                                width: 30,
                                height: 30,
                                margin: 10,
                                borderWidth: currentTheme === theme3 ? 3 : 0,
                                borderColor: '#FFFFFF',
                            }}
                            onPress={() => changeTheme(theme3)}
                        />
                        <Button
                            style={{
                                borderRadius: 100,
                                backgroundColor: theme4.colors.primary,
                                width: 30,
                                height: 30,
                                margin: 10,
                                borderWidth: currentTheme === theme4 ? 3 : 0,
                                borderColor: '#FFFFFF',
                            }}
                            onPress={() => changeTheme(theme4)}
                        />
                        <Button
                            style={{
                                borderRadius: 100,
                                backgroundColor: theme5.colors.primary,
                                width: 30,
                                height: 30,
                                margin: 10,
                                borderWidth: currentTheme === theme5 ? 3 : 0,
                                borderColor: '#FFFFFF',
                            }}
                            onPress={() => changeTheme(theme5)}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        backgroundColor={currentTheme.colors.primary}
                        _pressed={{ bg: currentTheme.colors.secondary }}
                        style={{ margin: 10, borderRadius: 20, width: 150 }}
                        onPress={() => navigation.navigate('Tchat')} 
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>CHAT</Text>
                    </Button>
                    <Button
                        backgroundColor={currentTheme.colors.primary}
                        _pressed={{ bg: currentTheme.colors.secondary }}
                        style={{ margin: 10, borderRadius: 20, width: 150 }}
                        onPress={() => deleteToken('token')}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>LOG OUT</Text>
                    </Button>
                </View>
            </View>
        </NativeBaseProvider>
    );
}
