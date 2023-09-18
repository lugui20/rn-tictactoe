import { StyleSheet} from "react-native";


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuTitle: {
        fontSize: 40,
        fontWeight: 700, 
        color: "#333",     
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 400, 
        color: "#333", 
        margin: 15,    
    },
    inlineItems: {
        flexDirection: 'row',
    },
    box: {
        width:100,
        height: 100,
        backgroundColor: "#BBB",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 5,
        padding: 5,
    },
    playerX: {
        color: "gold",
    },
    playerY: {
        color: "crimson",
    },
    blank: {
        color: "#EEE",
    },
    shadow: {
        textShadowColor: '#777',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10,
    },
    menuButton:{
        width: 150,
        height: 50,
        backgroundColor: "#777",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },
    textButton:{
        fontSize: 20,
        fontWeight: 700,
        color: "#EEE",
    },
})

export default styles;