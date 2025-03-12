import React from 'react';
import Head from 'next/head';
import RegisterForm from '../components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <Head>
        <title>Регистрация</title>
      </Head>
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-black text-2xl font-semibold mb-4">Регистрация</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;