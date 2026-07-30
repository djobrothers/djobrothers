const Joi = require('joi');

// International phone number pattern: + followed by country code and digits (e.g. +2348012345678, +447123456789, or without +)
const phoneRegex = /^\+?[1-9]\d{6,14}$/;

const enquirySchema = Joi.object({
  full_name: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Full name is required.',
      'string.min': 'Full name must be at least 2 characters long.',
      'string.max': 'Full name cannot exceed 100 characters.'
    }),

  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email address is required.',
      'string.email': 'Please provide a valid email address.'
    }),

  phone_number: Joi.string()
    .trim()
    .pattern(phoneRegex)
    .required()
    .messages({
      'string.empty': 'Phone number is required.',
      'string.pattern.base': 'Please enter a valid international phone number (e.g., +2348012345678 or +447123456789).'
    }),

  service: Joi.string()
    .valid(
      'Security & Surveillance',
      'Solar Installation',
      'Road & Building Construction',
      'General Enquiry'
    )
    .required()
    .messages({
      'any.only': 'Please select a valid service from the options provided.'
    }),

  message: Joi.string()
    .trim()
    .min(10)
    .max(2000)
    .required()
    .messages({
      'string.empty': 'Message is required.',
      'string.min': 'Message must be at least 10 characters long.',
      'string.max': 'Message cannot exceed 2000 characters.'
    })
});

const validateEnquiry = (req, res, next) => {
  const { error, value } = enquirySchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorDetails = error.details.map((detail) => ({
      field: detail.path[0],
      message: detail.message
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please check your inputs.',
      errors: errorDetails
    });
  }

  req.validatedBody = value;
  next();
};

module.exports = {
  validateEnquiry
};
