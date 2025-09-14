import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-service',
  jwtSecret: process.env.JWT_SECRET || 'your-super-secret-key-here',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  rateLimit: {
    windowMs: Number(process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000, // 15 minutes
    max: Number(process.env.RATE_LIMIT_MAX || 100) // limit each IP to 100 requests per windowMs
  }
};

export default config;