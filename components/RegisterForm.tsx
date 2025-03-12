import React, { useState } from 'react';
import { useRouter } from 'next/router';
import authService from '../services/authService';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      await authService.register(username, password);
      alert('Registration successful. Please check your email for confirmation.');
      router.push('/login');
    } catch (err) {
      console.error('Registration error:', err);
      setError('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit" className="btn">Register</button>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          font-size: 16px;
          color: #000;
          background-color: #f8f8f8;
        }

        * {
          box-sizing: border-box;
        }

        .form {
          max-width: 320px;
          padding: 15px;
          margin: 20px auto;
          background-color: #fff;
        }

        .input {
          display: block;
          width: 100%;
          padding: 8px 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          font-family: inherit;
          font-size: 16px;
        }

        .btn {
          display: block;
          width: 100%;
          padding: 8px 10px;
          border: 0;
          background-color: #1cbc11;
          cursor: pointer;
          font-family: inherit;
          font-size: 16px;
          color: #fff;
        }

        .btn:hover {
          background-color: #14a20a;
        }
      `}</style>
    </form>
  );
};

export default RegisterForm;
