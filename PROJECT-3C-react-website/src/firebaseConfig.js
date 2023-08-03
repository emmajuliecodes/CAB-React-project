import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBZQ47o518-2dm3aJvbXd6mTVt83rvC4KI",
	authDomain: "cab-react-recipes.firebaseapp.com",
	projectId: "cab-react-recipes",
	storageBucket: "cab-react-recipes.appspot.com",
	messagingSenderId: "849883022610",
	appId: "1:849883022610:web:e48579c9bb9adcf181dfcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
