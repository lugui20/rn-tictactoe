import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../global/style";
import { FontAwesome } from '@expo/vector-icons';


export default function Winner() {
    const navigation = useNavigation();
    const route = useRoute();
    const { win } = route.params;
    return(
        <View style={styles.container}>
            <Text style={styles.menuTitle}>
                {(win != '0') ? "Winner!!" : "Tie!!" }
            </Text>
            <View
                style={styles.box}
            >
                <FontAwesome
                    name={ win == 'X' ? 'star' : (win == 'Y' ? 'heart':'exclamation' )}
                    size={ 80 }
                    style={ win == 'X' ? [styles.shadow, styles.playerX] : (win == 'Y' ? [styles.shadow, styles.playerY] : [styles.shadow, styles.blank, {color: 'green'}]) } />
            </View>
            <TouchableOpacity
                style={[styles.box, styles.menuButton]}
                onPress={() => navigation.navigate('menu')}
            >                
                    <Text style={styles.textButton}>Restart Game</Text>
            </TouchableOpacity>
        </View>
    )
}