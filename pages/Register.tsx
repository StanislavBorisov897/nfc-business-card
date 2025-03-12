import React from 'react';
import Head from 'next/head';
import '../styles/styles.css'; // Подключите файл стилей

const RegisterPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <Head>
        <title>Регистрация</title>
      </Head>
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-black text-2xl font-semibold mb-4">Регистрация</h1>
        <form>
          <div className="mb-4">
            <label className="text-black block mb-2">Имя</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="text-black block mb-2">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="text-black block mb-2">Пароль</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;