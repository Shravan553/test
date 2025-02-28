// app/api/sendEmail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { personName, email, phone, address, quantity, potatoName, message,accountNumber, ifsc,holderName} = body;

    // Validate required fields
    if (!personName || !email || !phone || !address || !quantity || !accountNumber || !ifsc || !holderName) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',  // GoDaddy SMTP server
      port: 587, // TLS
      secure: false, // TLS encryption
      auth: {
        user: process.env.EMAIL_USER,  // GoDaddy email address
        pass: process.env.EMAIL_PASS,  // GoDaddy email password or app password
      },
      requireTLS: true,
      authMethod: 'LOGIN',
    });
    
    // Prepare email options
    const mailOptions = {
      from: email,  // From your GoDaddy email
      to: process.env.EMAIL_USER,  // Send to the same GoDaddy email or a different one
      subject: 'New Potato "Buy" Order Request',
      html: `  <!-- HTML content starts here -->
        <html>
          <body>
            <p><strong>Dear AgPotato Team,</strong></p>
            
            <p>You have received a new potato Buy request! Below are the details provided by the buyer:</p>
    
            <p><strong>Buyer Information:</strong></p>
            <ul>
              <li><strong>Name:</strong> ${personName}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Address:</strong> ${address}</li>
            </ul>
    
            <p><strong>Potato Information:</strong></p>
            <ul>
              <li><strong style="color: red;">Potato Name:</strong> ${potatoName || 'N/A'}</li>
              <li><strong style="color: red;">Quantity:</strong> ${quantity}</li>
            </ul>

            <p><strong>Banking Information:</strong></p>
            <ul>
              <li><strong style="color: red;">Account Holder Name:</strong> ${holderName}</li>
              <li><strong style="color: red;">Account Number:</strong> ${accountNumber}</li>
                            <li><strong style="color: red;">IFSC Code:</strong> ${ifsc}</li>

            </ul>

    
            <p><strong>Additional Message:</strong></p>
            <p>${message}</p>
    
            <p><em>Thank you for handling this request.</em></p>
            <p><strong>Best regards,</strong></p>
            <p><span style="color: #4CAF50;">AGPotato Website</span></p>
          </body>
        </html>
      `,  // HTML email body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Detailed Nodemailer Error:', error);
    return NextResponse.json(
      { 
        message: 'Failed to send email', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}
