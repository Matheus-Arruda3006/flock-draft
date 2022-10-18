import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXdHJkP4S2nR1nt2Q__K3q0OHFkWzIVio",
    authDomain: "contactform-1b256.firebaseapp.com",
    databaseURL: "https://contactform-1b256-default-rtdb.firebaseio.com",
    projectId: "contactform-1b256",
    storageBucket: "contactform-1b256.appspot.com",
    messagingSenderId: "855015925333",
    appId: "1:855015925333:web:40f6633394022e420b56dc",
    measurementId: "G-1R01H459GP"   
})


const analytics = getAnalytics(app);
  
var db = firebaseApp.firestore();

export {db}