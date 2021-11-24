import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGn8v37d1mrlRig8JdXYZgG8ZZ_olFShA",
    authDomain: "smsapp-a2ce9.firebaseapp.com",
    projectId: "smsapp-a2ce9",
    storageBucket: "smsapp-a2ce9.appspot.com",
    messagingSenderId: "775297880440",
    appId: "1:775297880440:web:c0fe4204b1b22a29fcb88d",
    measurementId: "G-94VTQ6224V"
  };

 export default firebase.initializeApp(firebaseConfig)