"use server";

import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  budget?: string;
  message: string;
};

export async function sendEmail(data: ContactFormData) {
  
  
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER ,
        pass: process.env.SMTP_PASS ,
      },
    });

    // Email to Admin
    const adminEmail = transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ,
      replyTo: data.email,
      subject: `📩 New Project Enquiry - ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
        <h3>Message</h3>
        <p>${data.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // Thank You Email to User
    const userEmail = transporter.sendMail({
      from: `"RK Web Creatives" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "Thank you for contacting RK Web Creatives!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Hello ${data.name},</h2>
          <p>Thank you for reaching out to RK Web Creatives. We've received your message and will get back to you within 24 hours.</p>
          <h3>Your Enquiry Details</h3>
          <blockquote style="border-left:4px solid #1B4B7A;padding-left:12px;color:#555;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${data.budget || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, "<br />")}</p>
          </blockquote>
          <p>If your enquiry is urgent, email us directly at hello@rkwebcreatives.com.</p>
          <br />
          <p>Best Regards,<br /><strong>RK Web Creatives</strong></p>
        </div>
      `,
    });

    // Send both emails simultaneously
    await Promise.all([adminEmail, userEmail]);

    return {
      success: true,
      message: "Emails sent successfully.",
    };
  } catch (error) {
    console.error("Email Error:", error);
    return {
      success: false,
      message: "Failed to send emails. Please try again later.",
    };
  }
}