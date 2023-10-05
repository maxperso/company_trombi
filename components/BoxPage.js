import React from "react";
import { Image, Text, StyleSheet, Pressable } from "react-native";

const BoxPage = ({ currentTheme, onPress, text, source }) => {
    return (
        <Pressable onPress={onPress} style={{...styles.container, backgroundColor: currentTheme}}>
            <Image source={source} style={styles.imag} />
            <Text style={styles.text}>
                {text}
                </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        elevation: 6,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 16,
        marginVertical: 10,
        marginHorizontal: 30,
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 22,
        color: 'white',
    },
    imag: {
        width: 45,
        height: 45,
        borderRadius: 10,
        marginRight: 13,
        marginHorizontal: 10,
    }
});

export default BoxPage;