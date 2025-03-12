import transporter from '../config/email';

const authService = {
  register: async (username: string, password: string) => {
    console.log('Starting registration process');
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      console.error('Registration request failed', response.status, response.statusText);
      throw new Error('Registration failed');
    }

    console.log('Registration request successful, sending confirmation email');
    await transporter.sendMail({
      from: '"NFC Business Card" <stanislav888888888888@gmail.com>',
      to: username,
      subject: 'Регистрация успешна',
      text: 'Вы успешно зарегистрировались в NFC Business Card. Добро пожаловать!',
    });
    console.log('Confirmation email sent');
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