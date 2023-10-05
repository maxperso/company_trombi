import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Button} from "native-base";
import CalendarWidget from "./Calendar";


export default function CalendarSquare({ currentTheme, changeTheme }) {
    const [isCalendarOpen, setIsCalendarOpen] = useState(true);
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    return (
        <View style={{backgroundColor: currentTheme.colors.primary, borderRadius: 20, height: 250, width: 250, padding: 20, marginTop: 20}}>
            {isCalendarOpen ? (
                <View style={styles.loadingText}>
                    <Text style={styles.date}>{day}</Text>
                    <Text style={styles.month}>{month}</Text>
                    <Text style={styles.year}>{year}</Text>
                    <Button
                        backgroundColor={currentTheme.colors.secondary}
                        _pressed={{ bg: currentTheme.colors.secondary }}
                        style={{ margin: 10, borderRadius: 20, width: 150 }}
                        onPress={() => setIsCalendarOpen(false)}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>See Calendar</Text>
                    </Button>
                </View>
            ) : (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10}}>
                    <Button
                        backgroundColor={currentTheme.colors.secondary}
                        _pressed={{ bg: currentTheme.colors.secondary }}
                        style={{ margin: 10, borderRadius: 20, width: 150 }}
                        onPress={() => setIsCalendarOpen(true)}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Close</Text>
                    </Button>
                    <CalendarWidget />
                </View>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    loadingText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        fontSize: 60,
        fontWeight: '900',
        textAlign: 'center',
        color: 'white',
    },
    month: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        color: 'white',
    },
    year: {
        position: 'absolute',
        top: 0,
        right: 0,
        opacity: 0.5,
        fontSize: 18,
        color: 'white',
    },
});
