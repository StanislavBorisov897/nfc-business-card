<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
import authService from '../../../services/authService';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      await authService.register(username, password);
      res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
=======
import { NextApiRequest, NextApiResponse } from 'next'; 
import authService from '../../../services/authService'; 
export default async (req, res) =
  if (req.method === 'POST') { 
    const { username, password } = req.body; 
    try { 
      await authService.register(username, password); 
      res.status(200).json({ message: 'Registration successful' }); 
    } catch (error) { 
      res.status(500).json({ error: error.message }); 
    } 
  } else { 
    res.status(405).json({ error: 'Method not allowed' }); 
  } 
}; 
>>>>>>> 76928c06c9f95d46aa99e68b802dce8bf884c85d
