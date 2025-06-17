import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase'; // your auth setup
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col justify-center items-center text-white">
      {/* Centered Logo and Title */}
      <img src="/src/assets/logo.png" alt="StudentLMS Logo" className="w-24 mb-2" />
      <h1 className="text-2xl font-bold mb-10 tracking-wider">STUDENT MANAGEMENT SYSTEM</h1>

      <button
        onClick={handleGoogleSignIn}
        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:scale-105 transition"
      >
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
