import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEvn3HcQaxErlqRpwlOZEl7gGOb5ojDOU",
  authDomain: "ib-home-real-estate.firebaseapp.com",
  projectId: "ib-home-real-estate",
  storageBucket: "ib-home-real-estate.firebasestorage.app",
  messagingSenderId: "443981507271",
  appId: "1:443981507271:web:5f2e434d39671c73c7ace2",
  measurementId: "G-HBZ7DZQ2D1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };