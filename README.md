# Sangam Backend

This is a microservices-based backend for the Sangam social media application.

## Services

### Auth Service
- Authentication and authorization service
- Handles user registration, login, and token management
- Located in `/auth-service` directory

## Project Structure
```
/
├── auth-service/           # Authentication service
├── (future services will be added here)
```

## Getting Started

### Prerequisites
- Node.js v20 or higher
- npm or yarn
- MongoDB (for auth service)

### Running the Services

#### Auth Service
```bash
cd auth-service
npm install
npm run build
npm start
```

## Development
Each service is independent and can be developed and deployed separately. Follow the README in each service directory for specific instructions.