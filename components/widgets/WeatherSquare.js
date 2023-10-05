import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";


export default function WeatherSquare({currentTheme, changeTheme}) {
    const [weatherData, setWeatherData] = useState(null);-

        useEffect(() => {
            const apiKey = 'c0529a336a1a55ec83793ead5e421b87';
            const lat = 45.75; // Latitude for Lyon, France
            const lon = 4.85;  // Longitude for Lyon, France
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    setWeatherData(data);
                })
                .catch((error) => {
                    console.error('Error fetching weathers data:', error);
                });
        }, []);

    return (
        <View style={{backgroundColor: currentTheme.colors.primary, borderRadius: 20, height: 250, width: 250, padding: 20, marginTop: 20, marginLeft: 10}}>
            {weatherData ? (
                <>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.weatherTitle}>{weatherData.main.temp.toString().split('.')[0]}°C</Text>
                        <Text style={styles.weatherText}>{weatherData.weather[0].main}</Text>
                        <Text style={styles.weatherText2}>{weatherData.weather[0].description}</Text>
                    </View>
                </>
            ) : (
                <Text style={styles.loadingText}>Loading weather data...</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    weatherTitle: {
        color: 'white',
        fontWeight: '900',
        fontSize: 60,
    },
    weatherText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 30,
    },
    weatherText2: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
    },
    loadingText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
