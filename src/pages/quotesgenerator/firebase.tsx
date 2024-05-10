// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

  
  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAp71o-vBO4c0mOHviFbXefQsPNFhjEkjQ",
    authDomain: "it35-morales1.firebaseapp.com",
    projectId: "it35-morales1",
    storageBucket: "it35-morales1.appspot.com",
    messagingSenderId: "499985650205",
    appId: "1:499985650205:web:b68ec2ab4de44f40fcacf4",
    measurementId: "G-ZSPPGVR9RV"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}