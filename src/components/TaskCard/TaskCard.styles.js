import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        marginVertical: 5,
        padding: 10,
        borderWidth: 3,
        borderRadius: 10,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 27,
        marginEnd: 10,
    },
    red: {
        borderColor: 'red'
    },
    green: {
        borderColor: 'green'
    }
})