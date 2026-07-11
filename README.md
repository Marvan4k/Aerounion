# 🚁 AeroUnion

AeroUnion is a full-stack helicopter marketplace built with **Next.js**, **NestJS**, and **PostgreSQL**.

The project demonstrates a modern web application architecture with a responsive frontend, REST API, Dockerized database, multilingual support, and an interactive 3D helicopter viewer powered by React Three Fiber.

---

## ✨ Features

- 🚁 Helicopter catalog
- 📄 Detailed helicopter pages
- 🛰 Interactive 3D helicopter viewer
- 🌍 Multi-language support (i18next)
- 📱 Responsive design
- ⚡ REST API built with NestJS
- 🗄 PostgreSQL database
- 🐳 Dockerized local development
- 🔄 Dynamic data loading with pagination

---

## 🛠 Tech Stack

### Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- React Three Fiber
- Drei
- i18next

### Backend

- NestJS
- TypeORM
- PostgreSQL
- class-validator
- class-transformer

### Infrastructure

- Docker
- Docker Compose
- PostgreSQL 16

---

# 📸 Screenshots

## Home Page

> _Coming soon_

## Helicopter Catalog

> _Coming soon_

## Product Details

> _Coming soon_

## 3D Viewer

> _Coming soon_

---

# 🏗 Architecture

```
                 Browser
                     │
                     ▼
            Next.js Frontend
                     │
              REST API (HTTP)
                     │
                     ▼
             NestJS Backend
                     │
                 TypeORM
                     │
                     ▼
                PostgreSQL
```

The project is divided into two independent applications.

```
frontend/
├── app/
├── components/
├── configuration/
├── constants/
├── features/
├── hooks/
├── locales/
├── providers/
├── services/
└── types/

backend/
├── src/
│   ├── auth/
│   ├── helicopters/
│   ├── users/
│   ├── common/
│   └── app.module.ts
├── package.json
└── tsconfig.json

docker-compose.yml
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/Marvan4k/Aerounion.git
cd Aerounion
```

## Install dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd ../backend
npm install
```

## Start PostgreSQL

From the project root:

```bash
docker compose up -d
```

## Run Backend

```bash
cd backend
npm run start:dev
```

Backend:

```
http://localhost:3000
```

## Run Frontend

```bash
cd frontend
npm run dev
```

Frontend:

```
http://localhost:3001
```

---

# ⚙ Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=aerounion
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres

JWT_SECRET=your_secret_key
```

---

# 📡 API

### Helicopters

```http
GET /helicopters?limit=10&offset=0
```

Returns a paginated list of helicopters.

```http
GET /helicopters/:id
```

Returns helicopter details.

```http
POST /helicopters
```

Creates a new helicopter.

```http
DELETE /helicopters/:id
```

Deletes a helicopter.

---

# 🗺 Roadmap

## Completed

- [x] Next.js frontend
- [x] NestJS backend
- [x] PostgreSQL integration
- [x] Docker support
- [x] REST API
- [x] Helicopter catalog
- [x] Product details page
- [x] Interactive 3D viewer
- [x] Pagination
- [x] Internationalization (i18next)

## Planned

- [ ] Authentication (JWT)
- [ ] User accounts
- [ ] Shopping cart
- [ ] Checkout page
- [ ] Product filters
- [ ] Search
- [ ] Favorites
- [ ] Admin dashboard
- [ ] Order management

---

# 🎯 Project Goals

The main purpose of this project is to improve full-stack development skills by building a production-like web application.

During development the project explores:

- Next.js App Router
- NestJS architecture
- REST API design
- PostgreSQL + TypeORM
- Docker
- React Three Fiber
- Internationalization
- Responsive UI development

---

# 👨‍💻 Author

**Roman Marvanov**

GitHub:
https://github.com/Marvan4k

LinkedIn:
_Coming soon_

---

# 📄 License

This project was created for educational and portfolio purposes.
