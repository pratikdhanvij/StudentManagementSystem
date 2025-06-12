import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomeButton from './HomeButton';

const StudentForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    course: '',
    joinDate: ''
  });

  const isEdit = location.state?.student;

  useEffect(() => {
    if (isEdit) {
      setFormData(location.state.student);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await axios.put(`http://localhost:5000/api/students/${formData._id}`, formData);
        toast.success("Student updated successfully!");
      } else {
        await axios.post('http://localhost:5000/api/students', formData);
        toast.success("Student registered successfully!");
      }
      navigate('/students');
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <HomeButton />
      <h2 className="text-2xl font-bold mb-4">{isEdit ? 'Edit Student' : 'New Student Registration'}</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full mb-2 p-2 border rounded" />
        <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" required className="w-full mb-2 p-2 border rounded" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full mb-2 p-2 border rounded" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full mb-2 p-2 border rounded" />
        <input name="course" value={formData.course} onChange={handleChange} placeholder="Course" required className="w-full mb-2 p-2 border rounded" />
        <input type="date" name="joinDate" value={formData.joinDate?.slice(0, 10)} onChange={handleChange} placeholder='Joining Date' required className="w-full mb-4 p-2 border rounded"  />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {isEdit ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
