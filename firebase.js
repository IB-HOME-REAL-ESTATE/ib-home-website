import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDEvn3HcQaxErlqRpwlOZEl7gGOb5ojDOU",
authDomain: "ib-home-real-estate.firebaseapp.com",
projectId: "ib-home-real-estate",
storageBucket: "ib-home-real-estate.firebasestorage.app",
messagingSenderId: "443981507271",
appId: "1:443981507271:web:5f2e434d39671c73c7ace2",
measurementId: "G-HBZ7DZQ2D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export { db };
export { app };
const db = getFirestore(app);

export { db };