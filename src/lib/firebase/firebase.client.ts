// Import the functions you need from the SDKs you need
import { initializeApp,getApps, getApp, deleteApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import 'firebase/database';



const firebaseConfig:any = {
  apiKey: import.meta.env.VITE_APIKEY ,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase

let firebaseApp:any;
if(!getApps().length){
  firebaseApp = initializeApp(firebaseConfig);
}else{
  firebaseApp= getApp();
  deleteApp(firebaseApp)
  firebaseApp= initializeApp(firebaseConfig)
}

//const app = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);


export const storage = getStorage(firebaseApp);


export const auth=getAuth(firebaseApp);