import { NextApiRequest, NextApiResponse } from 'next';
import authService from '../../../services/authService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      await authService.login(username, password);
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status 500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};