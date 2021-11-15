import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './SignupScreen'
import firebase from '../firebase';
import Home from './HomeScreen'


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', { user })
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/ourLogo.jpg')}
                style={styles.logo}
            />
            <Text style={styles.text}>YourExchange</Text>

            <FormInput
                labelVal={email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(usrEmail) => {
                    setEmail(usrEmail)
                }}
            />
            <FormInput
                labelVal={password}
                placeholder="Password"
                keyboardType="default"
                secureTextEntry={true}
                onChangeText={(usrPass) => {
                    setPassword(usrPass)
                }}
            />

            <FormButton
                title="Login"
                onPress={() => onLoginPress} //check out
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => { alert('I forgor') }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>


            <Text style={styles.navButtonText}>
                Don't have an acount? <TouchableOpacity
                    style={styles.forgotButton}
                    onPress={() => navigation.navigate('Signup')}><Text style={styles.navButtonTextIn}>Create here</Text>

                </TouchableOpacity>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 120
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: '',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'sans-serif',
    },
    navButtonTextIn: {
        fontSize: 15,
        fontWeight: '500',
        color: 'red',
        fontFamily: 'sans-serif',

    },
});