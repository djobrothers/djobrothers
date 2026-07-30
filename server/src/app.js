const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const enquiryRoutes = require('./routes/enquiryRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Security HTTP headers
app.use(helmet());

// CORS configuration
const rawOrigins = process.env.CORS_ORIGIN || 'http://localhost:3000';
const allowedOrigins = rawOrigins.split(',').map(o => o.trim()).filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser requests (e.g., Postman, server-to-server) or development requests
    if (!origin || process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    // Allow wildcard or explicit matching origins
    if (rawOrigins === '*' || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error(`CORS request blocked for origin: ${origin}`));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Compression & Body parsing
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// HTTP Request Logger
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// Health Check API
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    system: 'DJO Brothers Engineering API Engine',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API Routes
app.use('/api', enquiryRoutes);

// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Resource not found: ${req.method} ${req.originalUrl}`
  });
});

// Global Error Middleware
app.use(errorHandler);

module.exports = app;
