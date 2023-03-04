import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
    },
    header: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        fontSize: 30,
        color: '#e05909'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginStart: 10,
        paddingBottom: 3,
        color: '#e05909',
    },
    sumTask: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        marginStart: 10,
        color: '#e05909',
        textAlign: 'right'
    },
    body: {
        flex: 1,
    },
    emptyContainer:{
        flex: 1,
        justifyContent: 'center'
    },
    zeroTask: {
        color:'#e05909',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 30,
        textAlign: 'center'
    }
})