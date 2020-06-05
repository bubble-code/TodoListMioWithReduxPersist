import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyBX0C2okSw0z3UTa-6NpNH-Urd5riJktXQ",
    authDomain: "todo-al.firebaseapp.com",
    databaseURL: "https://todo-al.firebaseio.com",
    projectId: "todo-al",
    storageBucket: "todo-al.appspot.com",
    messagingSenderId: "562599571773",
    appId: "1:562599571773:web:75cba5a60fd72881f75554"
});
const db = firebase.firestore();

export {db};