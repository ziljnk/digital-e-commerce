// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: "seminar-d43fa.firebaseapp.com",
	projectId: "seminar-d43fa",
	storageBucket: "seminar-d43fa.appspot.com",
	messagingSenderId: "834148476412",
	appId: "1:834148476412:web:b117388137086aa6d13e79",
	measurementId: "G-C3JTWES8WZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
