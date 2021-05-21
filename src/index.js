import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';
import "firebase/auth";
import "firebase/firestore";
import App from './App';
import testsetset from './testsetset';

console.log(testsetset);


// firebase.initializeApp(firebaseConfig);
// firebase.auth().createUserWithEmailAndPassword('dlagm123213123leo89@gmail.com', 'asdfasdfasdf1121212').then(res=>{
//   console.log(res);
// })
// var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider).then(res=>{
//   console.log(res);
// })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

