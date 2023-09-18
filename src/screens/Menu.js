import { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome } from '@expo/vector-icons';

import styles from "../global/style";


export default function Menu() {
  
    const navigation = useNavigation();

    const [board, setBoard] = useState(
        [['?','?','?'],
        ['?','?','?'],
        ['?','?','?']]
    );

    function startGame(player) {
        setBoard(
            [['?','?','?'],
            ['?','?','?'],
            ['?','?','?']]
        );

        navigation.navigate('game', {player: player, board: board});

    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.menuTitle}>
                Tic-Tac-Toe
            </Text>            

            <Text style={styles.subTitle}>
                Who starts?
            </Text>
            <View style={styles.inlineItems}>
                <TouchableOpacity style={styles.box} onPress={() => startGame('X')}>
                    <FontAwesome name="star" size={80} style={[styles.shadow, styles.playerX]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => startGame('Y')}>                
                    <FontAwesome name="heart" size={80} style={[styles.shadow, styles.playerY]} />
                </TouchableOpacity>
            </View>
        </View>
    );
}