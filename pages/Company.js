import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import MiniWorker from "../components/MiniWorker";
import { GROUP_AUTHORIZATION } from '@env';
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import { Button } from 'native-base';
import BoxPage from '../components/BoxPage'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Bust from '../assets/bust.png';
import Calendar from '../assets/calendar.png';
import Bag from '../assets/bag.png';
import Email from '../assets/email.png';
import Gender from '../assets/gender.png';


const { width, height } = Dimensions.get('window');

export default function Company({ currentTheme, changeTheme }) {
    const [employees, setEmployees] = useState([]);
    const [meetButtonPressed, setMeetButtonPressed] = useState(false);
    const [info, setInfo] = useState(null);
    const [id, setId] = useState(null);

    async function getAccessToken() {
        return await SecureStore.getItemAsync('token');
    }

    async function getEmployees() {
        try {
            const token = await getAccessToken();
            const response = await axios.get('https://masurao.fr/api/employees', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                    'X-Group-Authorization': GROUP_AUTHORIZATION,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    useEffect(() => {
        getEmployees().then((employees) => {
            setEmployees(employees);
        });
    }, []);

    const handleMeetButtonClick = (idd) => {
        setId(idd);
        setMeetButtonPressed(true);
    };

    const handleBackToEmployees = () => {
        setMeetButtonPressed(false);
    };

    const getInfo = async () => {
        const config = {
          headers: {
            'X-Group-Authorization': GROUP_AUTHORIZATION,
            'Authorization': 'Bearer ' + await getAccessToken(),
          },
        };
      
        axios.get('https://masurao.fr/api/employees/' + id, config)
          .then(function (response) {
            setInfo(response.data);
          })
          .catch(function (error) {
            console.log(error);
            if (error.response && error.response.status === 401) {
              console.log('Token invalide');
            } else {
              console.log('Erreur inattendue :', error);
            }
          });
      };
    
    useEffect(() => {
        if (id)
        getInfo();
    }, [id]);

    return (
        <View style={{ flex: 1 }}>
            {meetButtonPressed ? (
                <View style={{flex: 1, backgroundColor: '#212121'}}>
                    <View style={styles.content}>
                        <Button 
                            backgroundColor={currentTheme.colors.primary}
                            _pressed={{ bg: currentTheme.colors.secondary }}
                            style={{ marginTop: 20, borderRadius: 20, width: 150, height: 34 }}
                            onPress={handleBackToEmployees} 
                            >
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Back to employees</Text>
                        </Button>
                        <View style={{height: '85%'}}>
                            <ScrollView >
                                <View style={{paddingVertical: 45}}>
                                    <BoxPage currentTheme={currentTheme.colors.primary} source={Bust} style={styles.imag} text={`${info?.surname} ${info?.name}`}/>
                                    <BoxPage currentTheme={currentTheme.colors.primary} source={Gender} text={info?.gender}/>
                                    <BoxPage currentTheme={currentTheme.colors.primary} source={Calendar} text={info?.birth_date}/>
                                    <BoxPage currentTheme={currentTheme.colors.primary} source={Email} text={info?.email}/>
                                    <BoxPage currentTheme={currentTheme.colors.primary} source={Bag} text={info?.work}/>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            ) : (
                <FlatList
                    data={employees}
                    keyExtractor={(item) => item.id.toString()}
                    pagingEnabled
                    horizontal
                    renderItem={({ item }) => (
                        <View style={{ width, height }}>
                            <MiniWorker
                                employee={item}
                                currentTheme={currentTheme}
                                changeTheme={changeTheme}
                                onMeetButtonClick={handleMeetButtonClick} // Passer la fonction de gestion du bouton "Meet"
                            />
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    column: {
        paddingVertical: 45,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        marginTop: 30,
        marginLeft: 20,
    },
});
