// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function POST(request , response) {
//   if (req.method === 'POST') {
    const { name, email, budget, timeframe, message } = request.body;

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: 'animeshbarik239@gmail.com',
        pass: 'yrho vzma qxmm brar', 
      },
    });

    const mailOptions = {
      from: 'cloud.animesh239@gmail.com',
      to: 'animeshbarik239@gmail.com',
      subject: 'New Contact Form Submission',
      html:`
        <h1>New Contact Form Submission</h1>
        <h2>Contact Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeframe:</strong> ${timeframe}</p>
        <h2>Message</h2>
        <p>${message}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      response.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      response.status(500).json({ error: 'Failed to send email' });
    }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
}
