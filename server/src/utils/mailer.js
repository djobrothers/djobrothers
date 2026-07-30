const nodemailer = require('nodemailer');
const logger = require('./logger');

let transporter = null;

if (process.env.SMTP_HOST && process.env.SMTP_USER) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

const sendEnquiryNotification = async (enquiry) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || '"DJO Brothers Engineering" <no-reply@djo-brothers.com>',
    to: process.env.ADMIN_EMAIL || 'enquiries@djo-brothers.com',
    subject: `[New Enquiry] ${enquiry.service} - ${enquiry.full_name}`,
    html: `
      <h2>New Corporate Enquiry Received</h2>
      <p><strong>Enquiry ID:</strong> ${enquiry.id}</p>
      <p><strong>Full Name:</strong> ${enquiry.full_name}</p>
      <p><strong>Email:</strong> ${enquiry.email}</p>
      <p><strong>Phone:</strong> ${enquiry.phone_number}</p>
      <p><strong>Service Requested:</strong> ${enquiry.service}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f4f6f8; padding: 12px; border-left: 4px solid #0284c7;">
        ${enquiry.message}
      </blockquote>
      <p><em>Received at: ${new Date(enquiry.created_at || Date.now()).toISOString()}</em></p>
    `
  };

  if (transporter) {
    try {
      await transporter.sendMail(mailOptions);
      logger.info(`Enquiry notification email dispatched for ID: ${enquiry.id}`);
    } catch (err) {
      logger.error(`Failed to send email notification for enquiry ${enquiry.id}:`, err.message);
    }
  } else {
    logger.info(`[SMTP Not Configured] Mock Email Dispatch for Enquiry ${enquiry.id}:`, mailOptions.subject);
  }
};

module.exports = {
  sendEnquiryNotification
};
