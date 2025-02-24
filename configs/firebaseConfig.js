// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: "business-project-f16b5.firebaseapp.com",
	projectId: "business-project-f16b5",
	storageBucket: "business-project-f16b5.firebasestorage.app",
	messagingSenderId: "915863919586",
	appId: "1:915863919586:web:97039426006591ef5f77bb",
	measurementId: "G-9PCVDMTD8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
