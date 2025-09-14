auth-service/
│── prisma/
│   ├── schema.prisma        # Prisma models
│   └── migrations/          # Auto-generated migrations
│
│── src/
│   ├── config/
│   │   ├── db.ts            # Prisma client instance
│   │   └── passport.ts      # Google OAuth strategy config
│   │
│   ├── controllers/
│   │   ├── auth.controller.ts # Login, callback, JWT issue
│   │   └── token.controller.ts # Refresh, revoke tokens
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.ts # Verify JWT
│   │   └── error.middleware.ts # Error handler
│   │
│   ├── routes/
│   │   ├── auth.routes.ts   # /auth/google, /auth/callback
│   │   └── token.routes.ts  # /refresh, /logout
│   │
│   ├── services/
│   │   ├── auth.service.ts  # Business logic (create user, login)
│   │   └── token.service.ts # Issue, validate, revoke refresh tokens
│   │
│   ├── utils/
│   │   ├── jwt.util.ts      # JWT generation/validation
│   │   └── logger.util.ts   # Logger (Winston/Pino)
│   │
│   ├── app.ts               # Express app, middleware setup
│   └── server.ts            # Entry point (start server)
│
│── .env                     # Env vars (DB, secrets, Google OAuth)
│── .gitignore
│── package.json
│── tsconfig.json            # If using TypeScript
│── Dockerfile               # For containerization
│── docker-compose.yml       # Optional: for local Postgres + Redis
