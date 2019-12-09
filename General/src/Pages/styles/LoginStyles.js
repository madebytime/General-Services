import colors from '../../styles/colors'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.yellow02
  
    },
    scrollViewContainer: {
      marginTop: 70,
      flex: 1,
      padding: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    scrollView: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      flex: 1,
    },
    loginHeader: {
      fontSize: 28,
      color: colors.white,
      fontWeight: '300',
      marginBottom: 40,
    },
    textLabel: {
      paddingTop:15,
      fontSize:18,
      fontWeight: '700',
      marginBottom: 20,
      color:colors.white
  },
  inputField: {
      borderBottomWidth: 2,
      paddingBottom: 5,
      paddingTop: 5,
      borderBottomColor:colors.white
  },
  forgetContainer:{
      flex:1,
      flexDirection:'row-reverse',
      paddingTop:35,
      paddingHorizontal:5,
  },
  forgetText:{
      fontSize:16,
      fontWeight:'200',
      color:colors.white,
  },
  loginButton: {
    borderRadius:25,
    backgroundColor:colors.white,
    width:220,
    height:50,
    justifyContent:'center',
    alignItems:'center'
    
  },
  buttonText:{
      flex:1,
      fontSize:18,
      alignItems:'center',
      justifyContent:'center',
      color:colors.black,
      fontWeight:'500',
      paddingTop:10,

  },
  buttonContainer:{
      flex:1,
      paddingTop:35,
      paddingHorizontal:40,
  },
  backContainer:{
      flex:1,
      flexDirection:'row',
      paddingTop:35,
      paddingHorizontal:5,
  }

  })

  export default styles;