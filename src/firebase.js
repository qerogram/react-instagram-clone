import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9fCiMdbCJJuWgQEXhi_YXNa2qnCfwABQ",
    authDomain: "instagram-clone-react-87866.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-87866.firebaseio.com",
    projectId: "instagram-clone-react-87866",
    storageBucket: "instagram-clone-react-87866.appspot.com",
    messagingSenderId: "249291250696",
    appId: "1:249291250696:web:ad58e5459993b7c88b05bd",
    measurementId: "G-S08PLFRS3B"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
  // export default db;