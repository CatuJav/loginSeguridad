import firebase from 'firebase/app';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe0lEKh0HxDjVTD_pSrE73qsqHFCzwncY",
    authDomain: "loginreact-fb978.firebaseapp.com",
    projectId: "loginreact-fb978",
    storageBucket: "loginreact-fb978.appspot.com",
    messagingSenderId: "899021878094",
    appId: "1:899021878094:web:999c1695003c1d5263a41f",
    measurementId: "G-SRH68BEVNX"
  };

  const firebs= firebase.initializeApp(firebaseConfig);
  const db = firebs.firestore();
  export {db}