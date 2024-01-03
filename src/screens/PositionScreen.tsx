import { StyleSheet, View } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>        
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:"#28C4D9",        
        alignItems:"center",
        flex:1,
        justifyContent:"center",
        alignContent:"center"        
    },
    cajaMorada:{
        
        width:100,
        height:100,
        backgroundColor:"#5856D6",
        borderWidth:10,
        borderColor:"white"
    },
    cajaNaranja:{
        width:100,
        height:100,
        backgroundColor:"#F0423B",
        borderWidth:10,
        borderColor:"white",
        
                
    }
});
