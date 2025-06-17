import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center p-4 bg-slate-800 shadow-md">
      <img
        src="/src/assets/logo.png"
        alt="StudentLMS"
        className="w-10 cursor-pointer"
        onClick={() => navigate('/dashboard')}
      />
      <h2 className="ml-3 text-lg font-bold text-white">StudentLMS</h2>
    </div>
  );
};

export default Header;
