import React from 'react';
import Head from 'next/head';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <Head>
        <title>Login</title>
      </Head>
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-black text-2xl font-semibold mb-4">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;