import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 3,
        borderColor: '#e05909',
        borderRadius: 10,
        marginBottom: 20
    },
    input: {
        flex: 1,
        color: 'white',
        fontSize: 17
    },
    button: {
        alignItems: 'flex-end',
        height: 45,
        backgroundColor: '#e05909',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    buttonTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
})