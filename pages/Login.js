import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { GROUP_AUTHORIZATION } from '@env';
import {Input} from "native-base";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";

async function save(token, tokenValue) {
    await SecureStore.setItemAsync(token, tokenValue);
}

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // try {
        //     const response = await axios.post('https://masurao.fr/api/employees/login', 
        //         JSON.stringify({ email, password }),
        //         {headers: {
        //             'Content-Type': 'application/json',
        //             'X-Group-Authorization': GROUP_AUTHORIZATION,

        //         },
        //     });
        //     if (response.data) { 
        //         // Handle successful login here, e.g., navigate to the next screen.
        //         const token = await response.data;
        //         await save('token', token["access_token"]);
        //         // You can use navigation libraries like React Navigation for that.
        //         navigation.navigate('Content');
        //     } else {
        //         // Handle login failure, e.g., show an error message.
        //         Alert.alert('Login Failed', 'Invalid email or password', response);
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        // }
        navigation.navigate('Content');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/grille.png")}
                style={styles.backgroundImage}
            />
            <View style={styles.loginText}>
                <Text style={styles.text}>Login</Text>
                <Image
                    source={require("../assets/Dice.png")}
                    style={styles.diceImage}
                />
            </View>
            <View style={styles.formContainer}>
                <Input
                    variant="rounded"
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#393939" // Set placeholder text color
                    borderWidth={3} // Add border width
                    borderColor="#393939" // Set border color
                    backgroundColor="transparent" // Set background color to transparent
                    _focus={{ borderColor: "#393939" }} // Set border color on focus
                    _hover={{ borderColor: "#393939" }} // Set border color on hover
                    fontWeight="bold" // Set placeholder text to bold
                    autoCapitalize="none" // Prevents automatic capitalization of the first letter
                />
                <Input
                    variant="rounded"
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    mt={5}
                    onChangeText={setPassword}
                    placeholderTextColor="#393939" // Set placeholder text color
                    borderWidth={3} // Add border width
                    borderColor="#393939" // Set border color
                    backgroundColor="transparent" // Set background color to transparent
                    _focus={{ borderColor: "#393939" }} // Set border color on focus
                    _hover={{ borderColor: "#393939" }} // Set border color on hover
                    fontWeight="bold" // Set placeholder text to bold
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 300,
        resizeMode: 'cover',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 80,
        justifyContent: 'center',
        textAlign: 'center',
    },
    loginText: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    diceImage: {
        width: 30,
        height: 30,
        top: 45,
        left: 2,
    },
    formContainer: {
        flex: 5,
        alignItems: 'center',
        margin: 50,
        justifyContent: 'flex-start',
    },
    input: {
        color: 'white',
        height: 50,
        fontSize: 20,
        borderRadius: 5,
        paddingLeft: 10,
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: '#414141',
        padding: 10,
        width: 200,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});
