import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';
import HomeButton from './components/HomeButton';
import Login from './components/Login'; // ✅ Login component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

// Placeholder components
const Payments = () => <div className=" text-center text-xl"> <Header/>  Payments Page</div>;
const StudentsCourse = () => <div className=" text-center text-xl"> <Header/>Students Course Page</div>;
const InstructorCourse = () => <div className=" text-center text-xl"> <Header/>Instructor Course Page</div>;
const Instructors = () => <div className=" text-center text-xl"> <Header/>Instructors Page</div>;
const Lessons = () => <div className=" text-center text-xl"> <Header/>Lessons Page</div>;
const Messages = () => <div className=" text-center text-xl"> <Header/>Messages Page</div>;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
