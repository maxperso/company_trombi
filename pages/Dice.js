import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View, Animated} from 'react-native';
import TicTacToe from "../components/widgets/TicTacToe";
import ChuckNorris from "../components/widgets/ChuckNorris";
import CalendarSquare from "../components/widgets/CalendarSquare";
import WeatherSquare from "../components/widgets/WeatherSquare";
import TicTacSquare from "../components/widgets/TicTacSquare";
import ChuckSquare from "../components/widgets/ChuckSquare";
import EmployeeSquare from "../components/widgets/EmployeeSquare";
import NewsSquare from "../components/widgets/NewsSquare";
import {theme1, theme2, theme3, theme4, theme5} from "../components/Theme";

export default function Dice({ currentTheme, changeTheme } ) {
    const spinValue = new Animated.Value(0);


    function getDiceImage(currentTheme) {
        switch (currentTheme) {
            case currentTheme === theme1:
                return require('../assets/Dice1.png');
            case currentTheme === theme2:
                return require('../assets/Dice2.png');
            case currentTheme === theme3:
                return require('../assets/Dice3.png');
            case currentTheme === theme4:
                return require('../assets/Dice4.png');
            case currentTheme === theme5:
                return require('../assets/Dice5.png');
            default:
                return require('../assets/Dice1.png'); // Default to Dice1.png if the theme is not recognized
        }
    }

    const [diceImage, setDiceImage] = React.useState(getDiceImage(currentTheme));

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(spinValue, {
                    toValue: 2,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['0deg', '2deg', '-2deg'],
    });

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#212121',}}>
        <View className={'Title'} style={{ flex: 1, alignItems: 'center' }}>
            <Text
                style={{
                    marginTop: 80,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 40,
                }}
            >
                Your Dice
            </Text>
            <
                Animated.View
                style = {
                    [
                        styles.container,
                        styles.deleteContainer,
                        {
                            transform: [{
                                rotate: spin
                            }],
                        },
                    ]
                } >
            <Image source={diceImage} style={{ width: 250, height: 250, marginTop: 20 }} />
            </Animated.View>
        </View>
        <View style={styles.container}>
            <CalendarSquare currentTheme={currentTheme} changeTheme={changeTheme}/>
            <WeatherSquare currentTheme={currentTheme} changeTheme={changeTheme}/>
            <TicTacSquare currentTheme={currentTheme} changeTheme={changeTheme}/>
            <ChuckSquare currentTheme={currentTheme} changeTheme={changeTheme}/>
            <NewsSquare currentTheme={currentTheme} changeTheme={changeTheme}/>
            <EmployeeSquare currentTheme={currentTheme} changeTheme={changeTheme}/>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
);
