import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const cardStyle = "bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300";
  const headingStyle = "text-xl font-bold";
  const subtextStyle = "text-gray-600 text-sm";

  return (
    <div className="min-h-screen bg-slate-800 text-white relative">
      {/* Top Bar with Logo and Logout */}
      <div className="flex justify-between items-center px-6 py-4 bg-slate-1000 shadow-md">
        {/* Logo - Clickable */}
        <div onClick={() => navigate('/dashboard')} className="cursor-pointer flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="StudentLMS Logo" className="w-10" />
          <h1 className="text-white-800 font-bold text-lg hidden sm:block">StudentLMS</h1>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
          title="Logout"
        >
          <FiLogOut size={20} />
        </button>
      </div>

      {/* Dashboard Content */}
      <header className="p-6 text-center border-b border-slate-700">
        <h1 className="text-2xl font-bold">Student Management System</h1>
        <p className="text-sm">Dashboard</p>
      </header>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Students */}
        <div className={cardStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/145/145867.png" alt="student" className="w-20 mx-auto mb-3" />
          <h2 className={headingStyle}>Students</h2>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/form')} className="text-blue-600 text-xl">New Registration</button>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/students')} className="text-blue-600 text-xl">Student Search / Profile</button>
          </div>
        </div>

        {/* Payments */}
        <div className={cardStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="payments" className="w-20 mx-auto mb-3" />
          <h2 className={headingStyle}>Payments</h2>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/payments')} className="text-blue-600 text-xl">Payments</button>
          </div>
        </div>

        {/* Courses/Levels */}
        <div className={cardStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="certificate" className="w-20 mx-auto mb-3" />
          <h2 className={headingStyle}>Courses/Levels</h2>
          <div className="flex justify-between items-center mb-1">
            <p className={subtextStyle}>Students Course</p>
            <button onClick={() => navigate('/courses/students')} className="bg-blue-600 text-white px-2 py-1 text-xs rounded">Create</button>
          </div>
          <div className="flex justify-between items-center">
            <p className={subtextStyle}>Instructor Course</p>
            <button onClick={() => navigate('/courses/instructors')} className="bg-blue-600 text-white px-2 py-1 text-xs rounded">Create</button>
          </div>
        </div>

        {/* Instructors */}
        <div className={cardStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/476/476863.png" alt="instructors" className="w-20 mx-auto mb-3" />
          <h2 className={headingStyle}>Instructors</h2>
          <p className={subtextStyle}>Manage Instructors</p>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/instructors')} className="text-blue-600 text-xl">New Staff Registration</button>
          </div>
        </div>

        {/* Lessons */}
        <div className={cardStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png" alt="lesson" className="w-20 mx-auto mb-3" />
          <h2 className={headingStyle}>Lessons</h2>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/lessons')} className="text-blue-600 text-xl">Manage Lesson - Assign Rating</button>
          </div>
        </div>

        {/* Messages */}
        <div className={cardStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/9195/9195102.png" alt="messages" className="w-20 mx-auto mb-3" />
          <h2 className={headingStyle}>Messages</h2>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/messages')} className="text-blue-600 text-xl">Messages from Instructors & Students</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
