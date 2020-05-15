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
        height: 100,
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
        width: 140,
        backgroundColor: "#fff",
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 4
    },
    achievementTitle: {
        fontFamily: "Poppins-Bold",
        textAlign: "center",
        marginBottom: 8
    },
    achievementDetail: {
        display: "flex",
        flexDirection: "row"
    },
    achievementCompletion: {
        marginLeft: 10
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontFamily: "Poppins"
    },
    objectives: {
        height: 290,
        width: "100%",
        backgroundColor: "#ffffff44",
        marginVertical: 20,
        borderRadius: 4,
        alignItems: "center"
    },
    objective: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: 14,
        alignItems: "center"
    },
    objectiveIcon: {
        marginRight: 10
    },
    objectiveTitle: {
        fontFamily: "Poppins-Bold",
        color: "#fff",
        fontSize: 20
    },
    objectiveCompletion: {
        marginLeft: "auto"
    },
    objectiveProgress: {
        fontFamily: "Poppins-Bold",
        color: "#fff",
        fontSize: 24
    },
    quotes: {
        display: "flex",
        alignItems: "center"
    },
    quote: {
        color: "#fff",
        fontFamily: "Poppins",
        textAlign: "center",
        fontSize: 16
    },
    author: {
        color: "#fff",
        fontFamily: "Poppins-Bold",
        textAlign: "center",
        fontSize: 16
    },
})