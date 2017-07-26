import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './utilities/routes.js';
import './index.css';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

let config = {
   apiKey: "AIzaSyA1q67LsUiqTy7ScVbyAPEH0Q6DRho4zR0",
   authDomain: "era-farah-alhumaidhi.firebaseapp.com",
   databaseURL: "https://era-farah-alhumaidhi.firebaseio.com",
   storageBucket: "era-farah-alhumaidhi.appspot.com",
   messagingSenderId: "314665155370"
};

firebase.initializeApp(config);

ReactDOM.render(
   <Routes history={browserHistory} />,
   document.getElementById('root')
);
