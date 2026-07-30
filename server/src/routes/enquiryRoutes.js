const express = require('express');
const router = express.Router();
const { validateEnquiry } = require('../validators/enquiryValidator');
const { handleCreateEnquiry } = require('../controllers/enquiryController');
const { enquiryRateLimiter } = require('../middlewares/rateLimiter');

router.post('/enquiries', enquiryRateLimiter, validateEnquiry, handleCreateEnquiry);

module.exports = router;
