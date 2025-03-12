import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Здесь вы можете добавить логику для сохранения данных пользователя в базу данных

  // Создаем транспортер для отправки почты
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Убедитесь, что эти переменные окружения настроены
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"NFC Business Card" <stanislav888888888888@gmail.com>',
      to: username,
      subject: 'Регистрация успешна',
      text: 'Вы успешно зарегистрировались в NFC Business Card. Добро пожаловать!',
    });

    res.status(200).json({ message: 'Registration successful. Confirmation email sent.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending confirmation email' });
  }
}