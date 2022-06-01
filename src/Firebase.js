import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDIj0FLNPRT4oBJ05--HOF0ChQdOXRFc2g",
    authDomain: "clone-5c298.firebaseapp.com",
    projectId: "clone-5c298",
    storageBucket: "clone-5c298.appspot.com",
    messagingSenderId: "58488223374",
    appId: "1:58488223374:web:f1f0efafe5d50a89977bdf",
    measurementId: "G-5DE7Q5B7XT" 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
export{auth, db};