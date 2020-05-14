import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    innerContainer: {
        paddingTop: Constants.statusBarHeight + 20,
        paddingHorizontal: 14
    },
    welcome: {
        display: "flex",
        flexDirection:"row"
    },
    welcomeText: {
        fontFamily: "Poppins",
        color: "#fff",
        fontSize: 20,
        fontWeight: "700"
    },
    name: {
        fontFamily: "Poppins",
        color: "#fff",
        fontSize: 20
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#fff",
        marginRight: 10
    },
    mainInfo: {
        display: "flex",
        width: "100%",
        height: 150,
        justifyContent: "center"
    },
    info: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: 22
    },
    bold: {
        fontFamily: "Poppins-Bold",
    },
    achievementHeading: {
        marginLeft: 4,
        marginBottom: 4,
        fontFamily: "Poppins",
        fontSize: 16,
        color: "#fff"
    },
    achievement: {
        height: 90,
        width: 130,
        backgroundColor: "#fff",
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 4
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontFamily: "Poppins"
    }
})