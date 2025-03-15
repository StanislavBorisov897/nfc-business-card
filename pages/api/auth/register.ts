import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import User from '../../../models/User';
import dbConnect from '../../../utils/dbConnect';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: '"NFC Business Card" <no-reply@nfcbusinesscard.com>',
      to: username,
      subject: 'Registration Successful',
      text: 'You have successfully registered at NFC Business Card. Welcome!',
    });

    res.status(201).json({ message: 'User registered successfully. Confirmation email sent.' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
}