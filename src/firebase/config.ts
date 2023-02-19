import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNOITEfXiIDg9cVx2OKn6P58LMZkch-Zg",
    authDomain: "futureproofedtest.firebaseapp.com",
    projectId: "futureproofedtest",
    storageBucket: "futureproofedtest.appspot.com",
    messagingSenderId: "638491118951",
    appId: "1:638491118951:web:1cf2dfad5785328e20b3c2"
};

//   init firebase app

const app = initializeApp(firebaseConfig);

//  init firestore

const db = getFirestore(app);

export { db }
