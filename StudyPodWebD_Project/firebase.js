// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHXDkwe1wAA-fgPdU6wzOs82BK-RZhedM",
    authDomain: "job-portal-154c2.firebaseapp.com",
    projectId: "job-portal-154c2",
    storageBucket: "job-portal-154c2.appspot.com",
    messagingSenderId: "638715444682",
    appId: "1:638715444682:web:d0d697ca5787ffd588a333",
    measurementId: "G-3M42PR64GX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
