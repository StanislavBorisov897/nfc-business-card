import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import authService from '../services/authService'; 
const LoginForm = () =
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); 
  const handleSubmit = async (e) =
    e.preventDefault(); 
    try { 
      await authService.login(username, password); 
      alert('Login successful'); 
      navigate('/setup'); 
    } catch (err) { 
      setError('Invalid login credentials'); 
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
export default LoginForm; 
