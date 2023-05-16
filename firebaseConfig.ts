// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBiEFpWfDi_AIcx6Xn-SaL9ql9YbBPjym4",
	authDomain: "flipbuddy-c1fb9.firebaseapp.com",
	projectId: "flipbuddy-c1fb9",
	storageBucket: "flipbuddy-c1fb9.appspot.com",
	messagingSenderId: "28131961461",
	appId: "1:28131961461:web:adf27e6ca0c1734cdca63c",
	measurementId: "G-4NPF7775R6",
};

// Initialize Firebase
export const FIRESTORE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIRESTORE_APP);
