// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
   apiKey: "AIzaSyC7uYHIPW1UsJLJRxafyEohQgOrWQ__lG4",
    authDomain: "tinder-clone-5f56c.firebaseapp.com",
    projectId: "tinder-clone-5f56c",
    storageBucket: "tinder-clone-5f56c.appspot.com",
    messagingSenderId: "502714978016",
    appId: "1:502714978016:web:431f05b06d4019bf144a85",
    measurementId: "G-R6NDJ5FJ50"
};

console.log("connected to firebase!");

 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;

  // const firebaseConfig =initializeApp({
  //   apiKey: "AIzaSyC7uYHIPW1UsJLJRxafyEohQgOrWQ__lG4",
  //   authDomain: "tinder-clone-5f56c.firebaseapp.com",
  //   projectId: "tinder-clone-5f56c",
  //   storageBucket: "tinder-clone-5f56c.appspot.com",
  //   messagingSenderId: "502714978016",
  //   appId: "1:502714978016:web:431f05b06d4019bf144a85",
  //   measurementId: "G-R6NDJ5FJ50"
  // });

  // const firebaseApp = initializeApp(firebaseConfig);
  // const database = firebaseApp.firestore();

  