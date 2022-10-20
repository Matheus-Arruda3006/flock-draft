import firebase from 'firebase'
import { initializeApp } from "firebase/app";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtS6aQ2_AKx0F4zvIgJB-z4HzTTG7hDA4",
    authDomain: "react-contact-form-b44b8.firebaseapp.com",
    projectId: "react-contact-form-b44b8",
    storageBucket: "react-contact-form-b44b8.appspot.com",
    messagingSenderId: "113677179248",
    appId: "1:113677179248:web:e1ad59f280339d5d8e17b5"
})

var db = firebaseApp.firestore();