import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Nodemailer transporter with connection pooling
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      pool: true, // Enable connection pooling
      maxConnections: 5,
      maxMessages: 100,
    });

    // Email structure
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Us Inquiry',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4CAF50;">New Contact Us Inquiry</h2>
          <p style="margin: 0; padding: 0;">You have received a new message:</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 10px;">
            <p><strong style="color: #4CAF50;">Name:</strong> ${name}</p>
            <p><strong style="color: #4CAF50;">Email:</strong> <a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></p>
            <p><strong style="color: #4CAF50;">Phone:</strong> ${phone}</p>
            <p><strong style="color: #4CAF50;">Message:</strong></p>
            <div style="background: #fff; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
              ${message}
            </div>
          </div>
          <p style="margin-top: 20px; font-size: 0.9em; color: #888;">
            <em>Sent via the AGPotato Contact Form</em>
          </p>
        </div>
      `,
    };

    // Asynchronous email sending
    transporter.sendMail(mailOptions).catch((err) => {
      console.error('Email sending failed:', err);
    });

    return NextResponse.json(
      { message: 'Your request is being processed😊' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      {
        message: 'Failed to process your request.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
