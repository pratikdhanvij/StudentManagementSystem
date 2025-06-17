import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import HomeButton from './HomeButton';
import Header from './Header';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate(); // ✅ initialize navigate

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/students');
      setStudents(res.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(`http://localhost:5000/api/students/${id}`);
      console.log("Delete response:", res.data);
      setStudents((prev) => prev.filter((student) => student._id !== id));
    } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
      alert("Failed to delete student.");
    }
  };

  return (
    <div className=" bg-slate-100 min-h-screen">
      <Header />
      
      <h2 className="text-2xl font-bold mb-8 text-center p-3">Student Search / Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {students.length === 0 ? (
          <p className="col-span-3 text-center text-gray-500">No students found.</p>
        ) : (
          students.map(student => (
            <div key={student._id} className="bg-white p-5 rounded shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
              <p><strong>Age:</strong> {student.age}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Phone:</strong> {student.phone}</p>
              <p><strong>Course:</strong> {student.course}</p>
              <p><strong>Join Date:</strong> {new Date(student.joinDate).toLocaleDateString()}</p>
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                  onClick={() => navigate(`/edit/${student._id}`)} // ✅ navigate to edit route
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentList;
