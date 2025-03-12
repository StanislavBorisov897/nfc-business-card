import React from 'react';
import { useRouter } from 'next/router';

const Setup: React.FC = () => {
  const router = useRouter();

  const handleSetupComplete = () => {
    alert('Setup complete');
    router.push('/');
  };

  return (
    <div>
      <h1>Setup Page</h1>
      <button onClick={handleSetupComplete}>Complete Setup</button>
    </div>
  );
};

export default Setup;