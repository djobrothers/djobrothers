require('dotenv').config();
const app = require('./src/app');
const logger = require('./src/utils/logger');

const PORT = process.env.PORT || 5000;

const db = require('./src/config/db');

// Execute pending database migrations automatically on server startup
db.migrate.latest()
  .then(([batchNo, log]) => {
    if (log.length > 0) {
      logger.info(`Database migration completed (Batch ${batchNo}): ${log.join(', ')}`);
    } else {
      logger.info(`Database schema is up to date.`);
    }
  })
  .catch((err) => {
    logger.error(`Database migration warning: ${err.message}`);
  });

const server = app.listen(PORT, () => {
  logger.info(`=======================================================`);
  logger.info(` DJO Brothers Engineering Backend API Server Active `);
  logger.info(` Listening on Port: ${PORT}`);
  logger.info(` Environment: ${process.env.NODE_ENV || 'development'}`);
  logger.info(` Health Check: http://localhost:${PORT}/api/health`);
  logger.info(`=======================================================`);
});

process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION! Shutting down gracefully...', err);
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  logger.error('UNCAUGHT EXCEPTION! Shutting down immediately...', err);
  process.exit(1);
});
