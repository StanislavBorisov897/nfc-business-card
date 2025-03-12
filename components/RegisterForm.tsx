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
