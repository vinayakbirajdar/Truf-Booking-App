import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtkKGTk5tqMvfSxn2sTUwmzLOAF3ydfcg",
    authDomain: "truf-booking-ca7dd.firebaseapp.com",
    projectId: "truf-booking-ca7dd",
    storageBucket: "truf-booking-ca7dd.firebasestorage.app",
    messagingSenderId: "768754959579",
    appId: "1:768754959579:android:7a5408fb7767f239a5f8fe",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { auth, firestore };