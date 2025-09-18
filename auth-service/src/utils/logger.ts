import type { AppConfig } from '../config/config';
const winston = require('winston');
const configuration = require('../config/config') as AppConfig;

const logLevel = configuration.env === 'development' ? 'debug' : 'info';

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

module.exports = { logger };