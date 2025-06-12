


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
import HomeButton from './components/HomeButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Placeholder components
const Payments = () => <div className="p-8 text-center text-xl">Payments Page</div>;
const StudentsCourse = () => <div className="p-8 text-center text-xl">Students Course Page</div>;
const InstructorCourse = () => <div className="p-8 text-center text-xl">Instructor Course Page</div>;
const Instructors = () => <div className="p-8 text-center text-xl">Instructors Page</div>;
const Lessons = () => <div className="p-8 text-center text-xl">Lessons Page</div>;
const Messages = () => <div className="p-8 text-center text-xl">Messages Page</div>;

function App() {
  return (
    

    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<StudentForm />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/courses/students" element={<StudentsCourse />} />
        <Route path="/courses/instructors" element={<InstructorCourse />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
    <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
