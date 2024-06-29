import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBLMskzHqXykqtUwBw31C_utNoJZVv6UDI",
    authDomain: "porfolio-73b6e.firebaseapp.com",
    projectId: "porfolio-73b6e",
    storageBucket: "porfolio-73b6e.appspot.com",
    messagingSenderId: "1000822769376",
    appId: "1:1000822769376:web:c2feb1d005f21d1c22b285"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);