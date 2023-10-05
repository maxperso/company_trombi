import React from "react";
import {View, StyleSheet, ScrollView, TouchableOpacity, Text} from "react-native";

const facts = [
    "Chuck Norris ne dort pas ; il attend.",
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
    "Chuck Norris ne fait pas de pompes ; il pousse la Terre vers le bas.",
    "Quand le monstre du placard va se coucher, il vérifie si Chuck Norris n'est pas sous son lit.",
    "Chuck Norris ne prend pas de douche. La saleté a trop peur pour s'approcher de lui.",
    "Si Chuck Norris était un calendrier, tous les mois seraient Chucktembre.",
    "Chuck Norris ne se mouille pas, c'est l'eau qui se Chuck Norris.",
    "Les larmes de Chuck Norris peuvent guérir le cancer. Malheureusement, il n'a jamais pleuré.",
    "Chuck Norris a un grizzly en peluche.",
    "Chuck Norris peut claquer une porte tournante.",
    "Chuck Norris a battu l'ombre au cache-cache.",
    "Chuck Norris peut diviser par zéro.",
    "Chuck Norris fait pleurer les oignons.",
    "Quand Chuck Norris entre dans une pièce, il n'a pas besoin d'allumer la lumière. Les ténèbres s'enfuient d'elles-mêmes.",
    "Le Big Bang n'est rien d'autre que Chuck Norris tapant dans ses mains.",
    "Chuck Norris peut faire des wheelings sur un vélo unicycle.",
    "Chuck Norris a déjà été mordu par un cobra royal. Après cinq jours de souffrance intense, le cobra est mort.",
    "Chuck Norris sait ce qu'il y a dans la boîte de Schrödinger sans l'ouvrir.",
    "Chuck Norris ne porte pas de montre. Il décide de l'heure qu'il est.",
    "Le code PIN de Chuck Norris est 0000, parce que personne n'est assez fou pour voler Chuck Norris."
];

const ChuckNorris = ({currentTheme, changeTheme}) => {
    const [joke, setJoke] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const fetchJoke = () => {
        setLoading(true);
        // Define the API URL
        const apiUrl = 'https://api.chucknorris.io/jokes/random';

        // Make the GET request
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Extract the joke from the response data
                const jokeValue = data.value;
                setJoke(jokeValue);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching Chuck Norris joke:', error);
                setLoading(false);
            });
    };

    React.useEffect(() => {
        // Fetch the joke when the component mounts
        fetchJoke();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{backgroundColor: currentTheme.colors.secondary, marginVertical: 10, padding: 15, borderRadius: 15, height: 120, textAlign: 'center'}} onPress={fetchJoke}>
                <Text style={styles.factText}>{joke}</Text>
            </TouchableOpacity>
            <Text style={{fontWeight: '800', color: 'white', fontSize: 25, textAlign: 'center'}}>CHUCK NORRIS FACTS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    factContainer: {
        marginVertical: 10,
        padding: 15,
        borderRadius: 15,
        height: 120,
        textAlign: 'center'
    },
    factText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center'
    },
});

export default ChuckNorris;
