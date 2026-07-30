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
const rawOrigins = process.env.CORS_ORIGIN || '*';
const allowedOrigins = rawOrigins !== '*' ? rawOrigins.split(',').map(o => o.trim()).filter(Boolean) : '*';

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || process.env.NODE_ENV === 'development') {
      return callback(null, true);
    }
    if (rawOrigins === '*' || !process.env.CORS_ORIGIN) {
      return callback(null, true);
    }
    if (Array.isArray(allowedOrigins) && allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
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

// API Routes (Mounted flexibly to support /enquiries, /api/enquiries, and /api/v1/enquiries)
app.use('/api/v1', enquiryRoutes);
app.use('/api', enquiryRoutes);
app.use('/', enquiryRoutes);

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
