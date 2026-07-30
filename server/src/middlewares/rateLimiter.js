const rateLimit = require('express-rate-limit');

const enquiryRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 10, // Limit each IP to 10 submissions per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many enquiries submitted from this IP address. Please try again after 15 minutes.'
  }
});

module.exports = {
  enquiryRateLimiter
};
