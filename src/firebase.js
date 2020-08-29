import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQtMpLGULTt7c9dX99cZmVeyyIz9fQFBg",
    authDomain: "datatables-953a4.firebaseapp.com",
    databaseURL: "https://datatables-953a4.firebaseio.com",
    projectId: "datatables-953a4",
    storageBucket: "datatables-953a4.appspot.com",
    messagingSenderId: "172317764569",
    appId: "1:172317764569:web:495a836478ba139dd547c8",
    measurementId: "G-TWFBFGMSH0"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export  {db};