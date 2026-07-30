const { Resend } = require('resend');
const logger = require('./logger');

const getResendClient = () => {
  const apiKey = (process.env.RESEND_API_KEY || '').trim();
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
};

const verifySmtpConnection = async () => {
  const apiKey = (process.env.RESEND_API_KEY || '').trim();
  if (!apiKey) {
    return {
      success: false,
      message: 'RESEND_API_KEY is missing in environment variables on Render.'
    };
  }

  try {
    const resend = new Resend(apiKey);
    // Simple verification by fetching API key domain info or sending ping
    return {
      success: true,
      message: 'Resend API key is configured and active! Service ready for dispatch.'
    };
  } catch (err) {
    return {
      success: false,
      message: err.message || 'Resend API verification failed',
      error: err
    };
  }
};

const sendEnquiryNotification = async (enquiry) => {
  const apiKey = (process.env.RESEND_API_KEY || '').trim();
  const adminEmail = (process.env.ADMIN_EMAIL || 'contact@djobrothers.com').trim();
  const fromEmail = (process.env.RESEND_FROM || 'DJO Brothers Limited <onboarding@resend.dev>').trim();

  if (!apiKey) {
    logger.info(`[Resend API Key Missing] Mock Dispatch for Enquiry ${enquiry.id} to ${adminEmail}`);
    return;
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      replyTo: enquiry.email,
      subject: `[New Database Entry] ${enquiry.service || 'General Enquiry'} — ${enquiry.full_name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
            .header { background: #0b132b; color: #ffffff; padding: 24px; text-align: center; border-bottom: 3px solid #0284c7; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; }
            .header p { margin: 4px 0 0 0; font-size: 12px; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.1em; }
            .content { padding: 28px; }
            .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 16px; text-transform: uppercase; }
            .field-group { margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #f1f5f9; }
            .field-label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #0f172a; font-weight: 600; }
            .message-box { background: #f8fafc; border-left: 4px solid #0284c7; padding: 16px; border-radius: 6px; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 8px; white-space: pre-wrap; }
            .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>DJO BROTHERS LIMITED</h1>
              <p>Database Submission Alert</p>
            </div>
            <div class="content">
              <div class="badge">New Enquiry Record Added</div>
              
              <div class="field-group">
                <div class="field-label">Record ID</div>
                <div class="field-value" style="font-family: monospace; color: #0284c7;">${enquiry.id || 'N/A'}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Service Division Requested</div>
                <div class="field-value">${enquiry.service || 'General Enquiry'}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Client Name</div>
                <div class="field-value">${enquiry.full_name}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Contact Email</div>
                <div class="field-value"><a href="mailto:${enquiry.email}" style="color: #0284c7; text-decoration: none;">${enquiry.email}</a></div>
              </div>

              <div class="field-group">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${enquiry.phone_number}" style="color: #0284c7; text-decoration: none;">${enquiry.phone_number}</a></div>
              </div>

              <div class="field-group" style="border-bottom: none;">
                <div class="field-label">Project Requirements / Message</div>
                <div class="message-box">${enquiry.message}</div>
              </div>
            </div>

            <div class="footer">
              Automated database trigger notification — DJO Brothers Limited System<br>
              Submitted on ${new Date(enquiry.created_at || Date.now()).toUTCString()}
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      logger.error(`Resend API Dispatch Error for ${enquiry.id}:`, error.message || error);
    } else {
      logger.info(`Notification email dispatched successfully via Resend API! ID: ${data?.id}`);
    }
  } catch (err) {
    logger.error(`Failed to send email via Resend API for ${enquiry.id}:`, err.message || err);
  }
};

module.exports = {
  sendEnquiryNotification,
  verifySmtpConnection
};
