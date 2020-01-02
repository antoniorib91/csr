import firebase from 'firebase';
const config = require('./config.json');

export class Firebase {
  public static init() {
    const firebaseConfig = config;
    firebase.initializeApp(firebaseConfig);
  }
}