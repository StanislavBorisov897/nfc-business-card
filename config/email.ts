import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'stanislav888888888888@gmail.com',
    pass: 'ljyw ulie dovn cyeu',
  },
});

export default transporter;