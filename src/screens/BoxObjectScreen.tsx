import { StyleSheet, Text, View } from 'react-native'
export const BoxObjectScreen = () => {
  return (
    <View style={styles.container}>      
        <Text style={styles.title}>Box object Model</Text>        
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:"red",
    flex:1    
  },
  title :{
    padding:10,
    textAlign:"center",    
    paddingVertical:20,
    marginVertical:100,
    fontSize:20,        
    borderWidth:1
  }

})
