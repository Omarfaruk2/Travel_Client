// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {



    apiKey: "AIzaSyCfkUgKMV7P7l6a48eLXcJoZwzDwczpDmY",
    authDomain: "travel-cf724.firebaseapp.com",
    projectId: "travel-cf724",
    storageBucket: "travel-cf724.appspot.com",
    messagingSenderId: "506788640395",
    appId: "1:506788640395:web:24c4319a2a272ea0c2068e"



}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth