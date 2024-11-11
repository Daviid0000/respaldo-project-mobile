import { StyleSheet } from "react-native"

export const StylesLogin = StyleSheet.create({
    centeredView: {
      flex: 1,
      alignItems: 'center',
      marginTop: 42,
    },
    title: {
      textAlign: 'center',
      fontSize: 30,
      padding: 20
    },
    subtitle: {
      fontSize: 20,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: '#2231',
      padding: 10,
      margin: 10
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#36f',
    },
    image: {
      width: 200,
      height: '50%'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 20
    },
    button: {
      borderRadius: 20,
      paddingHorizontal:60
    }
})

export const StylesRegister = StyleSheet.create({
  container:{
    alignItems:'center',
    margin: 'auto'
  },
  input:{
    fontSize:20,
    width:300,
    borderWidth:2,
    borderRadius: 5,
    margin: 5,
    borderColor:'#2231',
    padding: 10
  },
  InputContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems: 'flex-start'
  }
})

export const StylesHome = StyleSheet.create({
  title:{
      fontSize: 20,
      textAlign: 'center'
  },
  button:{
      borderRadius: 20,
      marginHorizontal: 'auto'
    },
    taskItem: {
      display: 'flex',
      flex:1,
      padding: 10,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
  },
})