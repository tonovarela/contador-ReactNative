import React, { useState } from 'react'
import { StyleSheet, Text,  View } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0);
    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
    const reset = () => setContador(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador :{contador}</Text>
            <Fab onPress={incrementar} text="+1" position='LEFT'  />
            <Fab onPress={reset} text="Reset"  position='CENTER' />
            <Fab onPress={decrementar} text="-1"  position='RIGHT' />           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "white"
    },
    title: {
        textAlign: "center",
        fontSize: 40,
        top: -100
    }   
});

