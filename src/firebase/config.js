import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDSfdC5m8rle8KKRev4fJNYNddm4qLBYp4",
    authDomain: "fir-dd7a4.firebaseapp.com",
    projectId: "fir-dd7a4",
    storageBucket: "fir-dd7a4.appspot.com",
    messagingSenderId: "130870331280",
    appId: "1:130870331280:web:9b29533318dcf1cc855515",
    measurementId: "G-WSPTZL068W"
  };

    export default firebase.initializeApp(firebaseConfig);