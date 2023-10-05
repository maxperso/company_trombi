import React from 'react';
import {StyleSheet, Image, Text, View, SafeAreaView} from 'react-native';
import { Button } from "native-base";


export default function Onboarding({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../assets/grille.png")}
                style={styles.backgroundImage}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Dice your way</Text>
                <Text style={styles.text}>to productivity!</Text>
            </View>
            <Button style={styles.startButton} backgroundColor='#414141' _pressed={{bg: "#353535"}}
            onPress={() => navigation.navigate("Login")}>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 15}}>GET STARTED</Text>
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 45,
        textAlign: 'center',
    },
    textContainer: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    startButton: {
        marginBottom: 100,
        borderRadius: 30,
        width: 350,
        height: 55,
    }
});
