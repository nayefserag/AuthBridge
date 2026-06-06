# 🔐 AuthBridge

![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)
![CI](https://github.com/nayefserag/AuthBridge/actions/workflows/ci.yml/badge.svg)

A reusable **NestJS authentication service** that handles registration, login, and user management for multiple applications — with **standard email/password, Google OAuth, and OTP verification**, plus a **dynamic multi-database** design so one deployment can serve several apps.

## ✨ Features

- 📝 Email/password registration & login
- 🔵 Google OAuth sign-in
- 📲 OTP (one-time password) verification
- 🪙 JWT-based session management
- 🗂️ **Dynamic database support** — switch DB per application via `APP_NAME` (e.g. `ECOMMERCE_APP_MONGO_URI`, `SOCIAL_MEDIA_APP_MONGO_URI`)
- 👤 User profile management & updates
- 📜 Swagger API documentation

## 🧰 Tech Stack

| Area | Tech |
|------|------|
| Framework | NestJS |
| Language | TypeScript |
| Database | MongoDB (per-app, env-driven) |
| Auth | JWT, Google OAuth, OTP |
| Docs | Swagger |
| Testing | Jest (unit + e2e + coverage) |
| Deploy | Docker |

## 🚀 Getting Started

```bash
npm install
cp .env.example .env        # set APP_NAME, *_MONGO_URI, JWT & Google OAuth keys
npm run start:dev
```

API docs available at `/api` (Swagger UI) once running.

### 🐳 Docker

```bash
docker build -t authbridge .
docker run -p 3000:3000 --env-file .env authbridge
```

## 🧪 Testing

```bash
npm test
npm run test:e2e
npm run test:cov
```

## 📄 License

MIT

---

<sub>If this project helped you, consider giving it a ⭐</sub>
