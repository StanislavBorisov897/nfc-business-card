import React from 'react';
import { useNavigate } from 'react-router-dom';

const Setup: React.FC = () => {
  const navigate = useNavigate();

  const handleSetupComplete = () => {
    alert('Setup complete');
    navigate('/');
  };

  return (
    <div>
      <h1>Setup Page</h1>
      <button onClick={handleSetupComplete}>Complete Setup</button>
    </div>
  );
};

export default Setup;