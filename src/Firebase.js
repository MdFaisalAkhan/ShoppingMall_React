import firebase from "firebase/app";
import  "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});
export const auth = app.auth()
export default app;



// import  firebase from 'firebase';
// import  "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCQoXS6jaYMy6yXuEXPtCaLQvrRQ5-84fY",
//   authDomain: "auth-development-71390.firebaseapp.com",
//   projectId: "auth-development-71390",
//   storageBucket: "auth-development-71390.appspot.com",
//   messagingSenderId: "336818764339",
//   appId: "1:336818764339:web:5a6e07bf384526582d8146"
// };
  // // Initialize Firebase
  // export const fire= firebase.initializeApp(firebaseConfig);

   

  // export const firedb= firebase.database().ref();



  // export const auth= firebase.auth();


// import firestore from 'firebase/firestore'


