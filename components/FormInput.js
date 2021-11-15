import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { windowWidth, windowHeight } from '../utils/dimensions';

const formInput = ({ labelVal, placeholder, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={labelVal}
                placeholder={placeholder}
                placeholderTextColor="#656"
                style={styles.input}
                {...rest}
            />
        </View>
    )
}

export default formInput

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'sans-serif',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
})
