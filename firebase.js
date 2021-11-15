// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBEEdxljaqCksiaSsiM2p93nH6rFsIjbsY",
    authDomain: "yourexchange-d9192.firebaseapp.com",
    projectId: "yourexchange-d9192",
    storageBucket: "yourexchange-d9192.appspot.com",
    messagingSenderId: "471651180270",
    appId: "1:471651180270:web:0d561ae576866e3a531dff"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };