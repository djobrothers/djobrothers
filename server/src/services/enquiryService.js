const { ulid } = require('ulid');
const db = require('../config/db');
const { sendEnquiryNotification } = require('../utils/mailer');
const logger = require('../utils/logger');

const createEnquiry = async (data) => {
  const newEnquiry = {
    id: ulid(),
    full_name: data.full_name,
    email: data.email,
    phone_number: data.phone_number,
    service: data.service,
    message: data.message,
    status: 'New',
    created_at: new Date(),
    updated_at: new Date()
  };

  try {
    await db('enquiries').insert(newEnquiry);
    logger.info(`Enquiry saved successfully to database: ${newEnquiry.id}`);
  } catch (dbError) {
    logger.error(`Database insertion failed for enquiry: ${dbError.message}`);
    // If DB is unreachable during local dev without PG running, fallback to memory record log to prevent hard crash if requested
    throw dbError;
  }

  // Trigger background mail dispatch (non-blocking)
  sendEnquiryNotification(newEnquiry).catch(err => {
    logger.error(`Background mail dispatch error for ${newEnquiry.id}:`, err.message);
  });

  return newEnquiry;
};

module.exports = {
  createEnquiry
};
