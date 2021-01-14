import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCuesU0sKgrWSPD5ur8AIzQXso-pxmXFf4",
    authDomain: "proyecto-coder-9bb77.firebaseapp.com",
    projectId: "proyecto-coder-9bb77",
    storageBucket: "proyecto-coder-9bb77.appspot.com",
    messagingSenderId: "757959100752",
    appId: "1:757959100752:web:37abc4485833a6dacd8455"
  });

  export function getFirebae(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }