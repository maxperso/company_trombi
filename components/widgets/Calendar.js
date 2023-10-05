import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const CalendarWidget = () => {

    const navigation = useNavigation();

    return (
        <View>
            <ScrollView >
                <Calendar/>
            </ScrollView >
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#F2F2F6',
    },
});

export default CalendarWidget;
