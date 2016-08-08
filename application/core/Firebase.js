import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCT7bC-kk_kg9S8WdncZthndN5eYUPA6kE",
  authDomain: "todolistreactnative-bdffa.firebaseapp.com",
  databaseURL: "https://todolistreactnative-bdffa.firebaseio.com",
  storageBucket: "todolistreactnative-bdffa.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

module.exports = firebaseApp;
