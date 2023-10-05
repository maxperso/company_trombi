import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'native-base';

const TicTacToe = ({ currentTheme, changeTheme }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (i) => {
        if (winner || board[i]) return;

        const newBoard = [...board];
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);

        const result = calculateWinner(newBoard);
        if (result) {
            setWinner(result);
        }
    };

    const renderSquare = (i) => (
        <TouchableOpacity style={styles.square} onPress={() => handleClick(i)}>
            <Text style={styles.squareText}>{board[i]}</Text>
        </TouchableOpacity>
    );

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
    };

    useEffect(() => {
        if (winner) {
            alert(`Le joueur ${winner} a gagné !`);
        }
    }, [winner]);

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={styles.board}>
                    <View style={styles.row}>
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </View>
                    <View style={styles.row}>
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </View>
                    <View style={styles.row}>
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </View>
                </View>
                <Button
                    backgroundColor={currentTheme.colors.secondary}
                    _pressed={{ bg: currentTheme.colors.secondary }}
                    style={{ margin: 10, borderRadius: 20, width: 150 }}
                    onPress={resetGame}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Start Again</Text>
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        marginBottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
        marginBottom: 20,
    },
    board: {
    },
    row: {
        flexDirection: 'row',
    },
    square: {
        margin: 2,
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    squareText: {
        fontSize: 40,
        fontWeight: '900',
        color: 'white',
    },
    text: {
        alignSelf: 'center',
        padding: 8,
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default TicTacToe;
