import firebase from 'firebase';
const config = require('./fire.json');

const firebaseConfig = config;
firebase.initializeApp(firebaseConfig);