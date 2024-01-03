import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Platform, GestureResponderEvent } from 'react-native';
interface Props {
    text: string;

    position: 'LEFT' | 'RIGHT' | 'CENTER',
    onPress: (event: GestureResponderEvent) => void
}

export const Fab = ({ text, onPress, position = 'CENTER' }: Props) => {
    
    const main = () => {
        return <View style={[styles.fabLocation, stylePosition()]}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    }
    const stylePosition = () => {        
        let result = {};
        switch (position) {
            case 'LEFT':
                result = styles.left;
                break;
            case 'RIGHT':
                result = styles.right;
                break;
            default:
                result = styles.center;
                break;
        }
        return result;
    }
    return (
        <>
            {main()}
        </>
    );

}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

    },
    fabText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    fabLocation: {
        position: 'absolute',
        bottom: 10,

    },
    right: {
        right: 25
    },
    left: {

        left: 25
    },
    center: {
        alignSelf: 'center',
    },
});
