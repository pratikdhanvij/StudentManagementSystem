import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome } from 'react-icons/fi'; // Home icon

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/dashboard')}
      className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 flex items-center gap-2"
    >
      <FiHome size={18} /> Home
    </button>
  );
};

export default HomeButton;
