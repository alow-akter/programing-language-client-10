// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACfTwn-AbAwI3vTL6Xn2S4E9RnLZwa7HY",
    authDomain: "programing-language-auth.firebaseapp.com",
    projectId: "programing-language-auth",
    storageBucket: "programing-language-auth.appspot.com",
    messagingSenderId: "496671953773",
    appId: "1:496671953773:web:814b8c352f63dca5470064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app