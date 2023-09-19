import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { FontAwesome } from '@expo/vector-icons';

import styles from "../global/style";


export default function Game() {
    const navigation = useNavigation();
    const route = useRoute();
    const { player, board } = route.params;
    const [gameBoard, setGameBoard] = useState(board);
    const [currentPlayer, setCurrentPlayer] = useState(player);
    const [remainingMoves, setRemainingMoves] = useState(9);

    function play(row, column) {
        gameBoard[row][column] = currentPlayer;
        setGameBoard([...gameBoard]);
        setCurrentPlayer(currentPlayer == 'X'? 'Y' : 'X');
        checkWinner(gameBoard, row, column);
    }

    function checkWinner(gameBoard, row, column){
        // Check rows
        if(
            (gameBoard[row][0] != '?') &&
            (gameBoard[row][0] == gameBoard[row][1]) && 
            (gameBoard[row][1] == gameBoard[row][2])
        ) {
            return finishGame(gameBoard[row][0]);
        }

        // Check columns
        if(
            (gameBoard[0][column] != '?') &&
            (gameBoard[0][column] == gameBoard[1][column]) && 
            (gameBoard[1][column] == gameBoard[2][column])
        ) {
            return finishGame(gameBoard[0][column]);
        }
       
        // Check main diagonal
        if(
            (gameBoard[0][0] != '?') &&
            (gameBoard[0][0] == gameBoard[1][1]) && 
            (gameBoard[1][1] == gameBoard[2][2])
        ) {
            return finishGame(gameBoard[0][0]);
        }
       
        // Check antidiagonal
        if(
            (gameBoard[0][2] != '?') &&
            (gameBoard[0][2] == gameBoard[1][1]) && 
            (gameBoard[1][1] == gameBoard[2][0])
        ) {
            return finishGame(gameBoard[0][2]);
        }

        setRemainingMoves(remainingMoves - 1);
    }

    function finishGame(player) {
        navigation.navigate('winner', {win: player});
    }

    useEffect(() => {
        if(remainingMoves == 0)
        {
            navigation.navigate('winner', {win: '0'});
        }
    })

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.menuTitle}>
                Tic-Tac-Toe
            </Text>            
            {
                board.map((row, nRow) => {
                    console.log(row, nRow);
                    return (
                        <View key={nRow} style={styles.inlineItems}>
                            {
                                
                                row.map((column, nColumn) => {
                                    return (
                                        <TouchableOpacity
                                            key={nColumn}
                                            style={styles.box}
                                            disabled={column != '?'}
                                            onPress={() => play(nRow, nColumn)}
                                        >
                                            <FontAwesome
                                                name={ column == 'X' ? 'star' : (column == 'Y' ? 'heart':'question' )}
                                                size={ 80 }
                                                style={ column == 'X' ? [styles.shadow, styles.playerX] : 
                                                    (column == 'Y' ? [styles.shadow, styles.playerY] :[styles.shadow, styles.blank])
                                                    } />
                                            
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
            
            <TouchableOpacity
                style={[styles.box, styles.menuButton]}
                onPress={() => navigation.navigate('menu')}
            >                
                    <Text style={styles.textButton}>Exit Game</Text>
            </TouchableOpacity>
        </View>
    );
}