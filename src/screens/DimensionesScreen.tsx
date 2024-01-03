import { Dimensions, StyleSheet, View, Text, useWindowDimensions } from "react-native"

export const DimensionesScreen = () => {
const {width,height}  = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={{...styles.cajaMorada,width:width*0.50}} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.texto}>W: {width},H:{height}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    texto:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    cajaMorada: {
        width: '50%',
        height: '50%',
        backgroundColor: "#5856D6",
    },
    cajaNaranja: {
        backgroundColor: "#F0423B"
    }
});
