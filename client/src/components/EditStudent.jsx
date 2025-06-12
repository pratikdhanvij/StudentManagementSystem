import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import HomeButton from './HomeButton';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    course: '',
    joinDate: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${id}`, student);
      navigate('/students');
    } catch (err) {
      console.error(err);
      alert('Failed to update student.');
    }
  };

  return (
    
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <HomeButton/>
      <h2 className="text-2xl font-bold mb-6">Edit Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'age', 'email', 'phone', 'course', 'joinDate'].map((field) => (
          <input
            key={field}
            name={field}
            type={field === 'joinDate' ? 'date' : 'text'}
            value={student[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder={`Enter ${field}`}
            required
          />
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Student
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
