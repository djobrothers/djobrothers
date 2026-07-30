const enquiryService = require('../services/enquiryService');
const logger = require('../utils/logger');

const handleCreateEnquiry = async (req, res, next) => {
  try {
    const enquiry = await enquiryService.createEnquiry(req.validatedBody);

    return res.status(201).json({
      success: true,
      message: 'Thank you for your enquiry. Our engineering team will review your request and contact you shortly.',
      data: {
        id: enquiry.id,
        full_name: enquiry.full_name,
        service: enquiry.service,
        created_at: enquiry.created_at
      }
    });
  } catch (error) {
    logger.error('Error in handleCreateEnquiry controller:', error.message);
    next(error);
  }
};

module.exports = {
  handleCreateEnquiry
};
