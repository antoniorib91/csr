import firebase from 'firebase';

export class Firebase {
  public static init() {
    var firebaseConfig = {
      apiKey: "AIzaSyCrD3JsZhpy1Vn_-WSh1IHGmqSu69f7RXM",
      authDomain: "csr-web.firebaseapp.com",
      databaseURL: "https://csr-web.firebaseio.com",
      projectId: "csr-web",
      storageBucket: "csr-web.appspot.com",
      messagingSenderId: "301602435301",
      appId: "1:301602435301:web:9b3b7e10b9eaae260b240c"
    };
    firebase.initializeApp(firebaseConfig);
  }
}