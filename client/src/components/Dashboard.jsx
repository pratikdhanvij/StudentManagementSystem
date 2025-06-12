import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const cardStyle = "bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300";
  const headingStyle = "text-xl font-bold";
  const subtextStyle = "text-gray-600 text-sm";

  return (
    <div className="min-h-screen bg-slate-800 text-white">
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
            <button onClick={() => navigate('/form')} className="text-gray-600 text-xl">New Registration</button>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/students')} className="text-gray-600 text-xl">Student Search / Profile</button>
          </div>
        </div>

        {/* Payments */}
        <div className={cardStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="payments" className="w-20 mx-auto mb-3" />
          <h2 className={headingStyle}>Payments</h2>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/payments')} className="text-gray-600 text-xl">Payments</button>
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
          <img src="https://cdn-icons-png.flaticon.com/512/921/921087.png" alt="instructors" className="w-20 mx-auto mb-3" />
          <h2 className={headingStyle}>Instructors</h2>
          <p className={subtextStyle}>Manage Instructors</p>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/instructors')} className="text-blue-600 text-xl">New Staff Registration</button>
          </div>
        </div>

        {/* Lessons */}
        <div className={cardStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/2922/2922644.png" alt="lesson" className="w-20 mx-auto mb-3" />
          <h2 className={headingStyle}>Lessons</h2>
          <div className="flex justify-between items-center">
            <button onClick={() => navigate('/lessons')} className="text-blue-600 text-xl">Manage Lesson - Assign Rating</button>
          </div>
        </div>

        {/* Messages */}
        <div className={cardStyle}>
          <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" alt="messages" className="w-20 mx-auto mb-3" />
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
