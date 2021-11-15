import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { windowWidth, windowHeight } from '../utils/dimensions';
export default function formButton({ title, ...rest }) {
    return (
        <TouchableOpacity style={styles.buttonContainer}{...rest}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: windowWidth - 40,    //try relative width if possible may cause prob with other phones
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,

    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff',
        fontFamily: 'sans-serif',
    }
})
