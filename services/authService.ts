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
      subject: '��������� �ᯥ譠', 
      text: '�� �ᯥ譮 ��ॣ����஢����� � NFC Business Card. ���� ����������!', 
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
