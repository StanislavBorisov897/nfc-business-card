<<<<<<< HEAD
import transporter from '../config/email';

const authService = {
  register: async (username: string, password: string) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    await transporter.sendMail({
      from: '"NFC Business Card" <stanislav888888888888@gmail.com>',
      to: username,
      subject: 'Ð ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ ÑƒÑÐ¿ÐµÑˆÐ½Ð°',
      text: 'Ð’Ñ‹ ÑƒÑÐ¿ÐµÑˆÐ½Ð¾ Ð·Ð°Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð¸Ñ€Ð¾Ð²Ð°Ð»Ð¸ÑÑŒ Ð² NFC Business Card. Ð”Ð¾Ð±Ñ€Ð¾ Ð¿Ð¾Ð¶Ð°Ð»Ð¾Ð²Ð°Ñ‚ÑŒ!',
    });
  },

  login: async (username: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Invalid login credentials');
    }
  },
};

export default authService;
=======
import transporter from '../config/email'; 
const authService = { 
  register: async (username, password) =
    const response = await fetch('/api/auth/register', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify({ username, password }), 
    }); 
    if (!response.ok) { 
      throw new Error('Registration failed'); 
    } 
    await transporter.sendMail({ 
      to: username, 
      subject: '¥£¨áâà æ¨ï ãá¯¥è­ ', 
      text: '‚ë ãá¯¥è­® § à¥£¨áâà¨à®¢ «¨áì ¢ NFC Business Card. „®¡à® ¯®¦ «®¢ âì!', 
    }); 
  }, 
  login: async (username, password) =
    const response = await fetch('/api/auth/login', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify({ username, password }), 
    }); 
    if (!response.ok) { 
      throw new Error('Invalid login credentials'); 
    } 
  }, 
}; 
export default authService; 
>>>>>>> 76928c06c9f95d46aa99e68b802dce8bf884c85d
