
import { StyleSheet} from 'react-native';
import colors from '../../styles/colors'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.yellow02,
    },
    welcomeContainer: {
        flex: 1,
        marginTop: 30,
    },

    animation: {
        width: 100,
        height: 100,
        marginTop: 25,
        marginBottom: 40,
    },
    welcomeText: {
        padding: 23,
        fontSize: 30,
        color: colors.white,
        fontWeight: '100',
        marginBottom: 28,
    },
    googleButtonIcon: {
        position: 'relative',
        left: 50,
        zIndex: 8,
        width: 30,
        height: 25,
    },
    facebookButtonIcon: {
        color: colors.white,
        position: 'relative',
        left: 45,
        zIndex: 8,
    },
    iconHoshi: {
        color: colors.yellow02,
        position: 'relative',
        left: 50,
        zIndex: 8,
    },
    buttonContainer: {
        paddingHorizontal: 25,
    },

    Buttonwrapper: {
        padding: 12,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom: 15,
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 16,
        width: '100%',
        textAlign: 'center',
    },
    buttonTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    facebookButton: {
        padding: 12,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.blue,
        backgroundColor: colors.blue,
        marginBottom: 15,
        alignItems: 'center',
    },
    googleButton: {
        padding: 12,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.white,
        backgroundColor: colors.white,
        marginBottom: 15,
        alignItems: 'center',
    },
    loginContainer:{
        flexDirection:'row-reverse',   
        paddingHorizontal:10,
        paddingTop:10,

    },
    textLogin:{
        fontSize:18, 
        color:colors.white,
        fontWeight:'300',
    }


});

export default styles;