// Import core and auth SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA0Nml9duzsEz7EqqaLzCGIAFHt7UBQ4dA",
  authDomain: "studentmanagementsystem-26525.firebaseapp.com",
  projectId: "studentmanagementsystem-26525",
  storageBucket: "studentmanagementsystem-26525.firebasestorage.app",
  messagingSenderId: "27012992915",
  appId: "1:27012992915:web:300ea3c4d11e9399d26266",
  measurementId: "G-BMYZ4W7DLP"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Optional: initialize analytics
const analytics = getAnalytics(app);

// ✅ Auth Setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
