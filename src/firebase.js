// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
   apiKey: "LOCATEDINPROJECT",
    authDomain: "LOCATEDINPROJECT",
    projectId: "LOCATEDINPROJECT",
    storageBucket: "LOCATEDINPROJECT",
    messagingSenderId: "LOCATEDINPROJECT",
    appId: "LOCATEDINPROJECT",
    measurementId: "LOCATEDINPROJECT"
};

console.log("connected to firebase!");

 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

  // const firebaseApp = initializeApp(firebaseConfig);
  // const database = firebaseApp.firestore();

  
