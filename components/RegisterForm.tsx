<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authService.register(username, password);
      alert('Registration successful. Please check your email for confirmation.');
      navigate('/login');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
=======
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import authService from '../services/authService'; 
const RegisterForm = () =
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 
  const handleSubmit = async (e) =
    e.preventDefault(); 
    try { 
      await authService.register(username, password); 
      alert('Registration successful. Please check your email for confirmation.'); 
      navigate('/login'); 
    } catch (err) { 
      setError('Registration failed'); 
    } 
  }; 
  return ( 
          type="text" 
          id="username" 
          value={username} 
          onChange={(e) =
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) =
  ); 
}; 
export default RegisterForm; 
>>>>>>> 76928c06c9f95d46aa99e68b802dce8bf884c85d
