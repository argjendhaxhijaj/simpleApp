import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC9ANA9XMkkE7AMxN8zJVz7DNC4u9WuXb8",
    authDomain: "simple-cd611.firebaseapp.com",
    databaseURL: "https://simple-cd611.firebaseio.com",
    projectId: "simple-cd611",
    storageBucket: "simple-cd611.appspot.com",
    messagingSenderId: "975591766102",
    appId: "1:975591766102:web:de2ea643e1debff7a9a3f7"
  };

const fire = firebase.initializeApp(firebaseConfig)
export default fire;