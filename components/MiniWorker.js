import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { GROUP_AUTHORIZATION } from '@env';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'native-base';


export default function MiniWorker({ employee, currentTheme, changeTheme, onMeetButtonClick }) {
    const [image, setImage] = React.useState(null);
    const [infos, setInfos] = React.useState(null);

    async function getAccessToken() {
        return await SecureStore.getItemAsync('token');
    }

    async function getEmployeeImage() {
        try {
            const request = await fetch(`https://masurao.fr/api/employees/${employee.id}/image`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'image/json',
                    'Authorization': 'Bearer ' + (await getAccessToken()),
                    'X-Group-Authorization': GROUP_AUTHORIZATION,
                },
            });

            const blob = await request.blob();
            return URL.createObjectURL(blob);
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    useEffect(() => {
        getEmployeeImage().then((image) => {
            setImage(image);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.backgroundImage} />
            <LinearGradient colors={['rgba(0,0,0, 0.1)', currentTheme.colors.primary]} style={{ flex: 1, opacity: 1 }}>
                <View style={styles.content}>
                    <Text style={styles.employeeName}>
                        {employee.name}{'\n'}{employee.surname}
                    </Text>
                    <Button
                        backgroundColor={currentTheme.colors.primary}
                        _pressed={{ bg: currentTheme.colors.secondary }}
                        style={{ marginTop: 20, borderRadius: 20, width: 150 }}
                        onPress={() => onMeetButtonClick(employee.id)}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Info</Text>
                    </Button>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    gradientOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Change this color as needed
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginBottom: 150,
        marginLeft: 20,
    },
    employeeName: {
        fontSize: 50,
        fontWeight: '700',
        color: 'white', // Change text color as needed
        // Other text styles
    },
});
