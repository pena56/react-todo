import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC4yx7exz_5Co3oOt5agGDdezvwoJxD1TM',
  authDomain: 'todo-2db81.firebaseapp.com',
  projectId: 'todo-2db81',
  storageBucket: 'todo-2db81.appspot.com',
  messagingSenderId: '361682488009',
  appId: '1:361682488009:web:c18b6f1f3baa1b6d79db18',
  measurementId: 'G-0QRH8MR9CN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export const auth = firebaseApp.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
