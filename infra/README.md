# Docker Setup for Sangam Microservices

This directory contains Docker configurations for all database services used in the Sangam application.

## Services Included

- PostgreSQL (Port: 5432) - For Auth Service
- MongoDB (Port: 27017) - For other microservices
- Redis (Port: 6379) - For caching and session management

## Getting Started

1. Make sure Docker and Docker Compose are installed on your system
2. From the root directory, run:
   ```bash
   cd docker
   docker-compose up -d
   ```

## Connection Details

### PostgreSQL
- Host: localhost
- Port: 5432
- User: sangam_user
- Password: sangam_password
- Database: sangam_auth

### MongoDB
- Host: localhost
- Port: 27017
- User: sangam_user
- Password: sangam_password

### Redis
- Host: localhost
- Port: 6379
- Password: sangam_password

## Data Persistence

All data is persisted through Docker volumes:
- postgres_data: PostgreSQL data
- mongodb_data: MongoDB data
- redis_data: Redis data

## Network

All services are connected through the 'sangam_network' bridge network.