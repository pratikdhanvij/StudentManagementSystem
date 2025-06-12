import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
    >
      ⬅ 🏠
    </button>
  );
};

export default HomeButton;
