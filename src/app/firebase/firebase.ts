// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import firebaseConfig from './firebaseConfig';





// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }


// export const auth = firebase.auth();
// export const firestore = firebase.firestore();



// ------------ Update----------------

// import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import firebaseConfig from "./firebaseConfig";

// const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const firestore = getFirestore(app);
// export default app;


// ------------New Update----------------

import { getApp, getApps, initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase if not already initialized
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;