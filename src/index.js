import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import App from './App';

firebase.initializeApp(firebaseConfig);
//logs
ReactDOM.render(
	<React.StrictMode>
		<App /> 
	</React.StrictMode>,
	document.getElementById('root')
);
