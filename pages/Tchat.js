import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, FlatList, Text } from 'react-native';
import { theme1, theme2, theme3, theme4, theme5, colors } from '../components/Theme'; // Import the themes you created
import { Button } from "native-base";

export default function ChatScreen({ navigation, currentTheme }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const fakeResponses = ["Salut", "Tu vas bien", "Ouais Max tg", "ALOOOOOOOOOOO", "Bon j'ai plus le temps a++"];

    const handleSend = () => {
        let newMessages = [...messages, { text: input, isUser: true }];
    
        // Si le message précédent n'est pas une réponse automatique ou si c'est le premier message
        if (messages.length === 0 || messages[messages.length - 1].isUser) {
            let responseIndex = newMessages.filter(message => !message.isUser).length;
            if (responseIndex < fakeResponses.length) {
                newMessages.push({ text: fakeResponses[responseIndex], isUser: false });
            } else {
                newMessages.push({ text: "Bon j'ai plus le temps a++", isUser: false });
            }
        }
    
        setMessages(newMessages);
        setInput("");
    };    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Button 
                    style={styles.returnButton} 
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{color: "white", fontWeight: "bold", fontSize: 15}}>RETURN</Text>
                </Button>
            </View>
    
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={[styles.messageContainer, item.isUser ? styles.userMessage : styles.botMessage]}>
                        <Text style={styles.messageText}>{item.text}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="Type a message..."
                    style={[styles.input, { backgroundColor: currentTheme?.colors?.primary || theme1.colors.primary }]}
                />
                <Button style={styles.sendButton} onPress={handleSend}>
                    <Text style={{color: "white", fontWeight: "bold", fontSize: 15}}>SEND</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        backgroundColor: theme1.colors.primary,
        margin: 5,
        maxWidth: '100%',
        borderRadius: 20,
        paddingRight: 10,
        padding: 10, 
        alignSelf: 'flex-end'
    },
    messageText: {
        color: 'white',
        fontSize: 18,
    },    
    userMessage: {
        alignSelf: 'flex-end',
        maxWidth: '100%',
        backgroundColor: theme1.colors.primary,
    },
    botMessage: {
        alignSelf: 'flex-start',
        maxWidth: '100%',
        backgroundColor: theme2.colors.primary,
    },
    container: {
        maxWidth: '100%',
        flex: 1,
        backgroundColor: '#212121',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderRadius: 35,
        paddingHorizontal: 15,
        height: 45,
        marginRight: 10,
        marginLeft: 20,
    },
    sendButton: {
        borderRadius: 25,
        width: 80,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -20,
    },
    headerContainer: {
        width: '100%',
        alignItems: 'flex-start',
        padding: 10,
        marginTop: 10,
    },
    returnButton: {
        borderRadius: 25,
        width: 100,
        height: 45,
        alignItems: 'right',
        justifyContent: 'center',
    },
});
