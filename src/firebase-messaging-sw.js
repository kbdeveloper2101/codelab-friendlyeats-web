import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// ご自身のFirebase設定（firebaseConfig）をここに貼り付けます
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBXUUDOzjgryoPTy7kbFwsmv56NkbTo_hY",
    authDomain: "friendlychat-a5081.firebaseapp.com",
    projectId: "friendlychat-a5081",
    storageBucket: "friendlychat-a5081.firebasestorage.app",
    messagingSenderId: "90648862113",
    appId: "1:90648862113:web:f638b79175982f4d97bfe0",
    databaseURL: 'https://PROJECT_ID.firebaseio.com',
    measurementId: 'G-MEASUREMENT_ID'
});

const messaging = getMessaging(firebaseApp);