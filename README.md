# AeroUnion

Modern helicopter marketplace built with Next.js and NestJS.

A full-stack pet project for browsing helicopters, viewing detailed product information, and exploring a 3D model viewer in a polished storefront experience.

## Screenshots

Screenshots can be added here to make the project look more professional on GitHub.

- Home page
- Helicopter catalog
- Product details page
- 3D viewer

## Features

- Helicopter catalog with pagination support
- Detailed product pages with specifications
- Interactive 3D model viewer built with React Three Fiber
- Responsive UI for desktop and mobile layouts
- Multi-language support using i18next
- REST API for listing and retrieving helicopter data
- PostgreSQL database with Docker-based setup

## Tech Stack

### Frontend

- Next.js
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
- class-validator / class-transformer

### Infrastructure

- Docker Compose
- PostgreSQL 16

## Architecture

The project is split into two independent applications:

- `frontend/` — user interface, pages, localizations, model rendering
- `backend/` — REST API, business logic, database access

Frontend communicates with the backend through HTTP requests to the NestJS API. The PostgreSQL database is launched separately via Docker.

## Project Structure

```text
frontend/
├── app/
├── components/
├── configuration/
├── constants/
├── feature/
├── hooks/
├── locales/
└── providers/

backend/
├── src/
│   ├── helicopters/
│   └── app.module.ts
└── package.json

docker-compose.yml
```

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd AeroUnion
```

### 2. Install dependencies

```bash
cd frontend
npm install

cd ../backend
npm install
```

### 3. Start PostgreSQL with Docker

From the project root:

```bash
docker compose up -d
```

### 4. Start the backend

```bash
cd backend
npm run start:dev
```

### 5. Start the frontend

```bash
cd frontend
npm run dev
```

The frontend runs on `http://localhost:3001` and the backend API on `http://localhost:3000`.

## Environment and Database Configuration

The database is configured in Docker Compose and connected by the backend via the TypeORM configuration in the NestJS app.

Default local setup:

- Database: `aerounion`
- Username: `postgres`
- Password: `postgres`
- Host: `localhost`
- Port: `5432`

## API

### Helicopters

```http
GET /helicopters?limit=10&offset=0
GET /helicopters/:id
POST /helicopters
DELETE /helicopters/:id
```

## Roadmap

- [x] Backend foundation
- [x] Dockerized PostgreSQL
- [x] Helicopter catalog
- [x] Detailed product page
- [x] 3D viewer
- [ ] Shopping cart
- [ ] Order workflow
- [ ] Admin panel
- [ ] Authentication and user accounts

## What I Learned

- Next.js App Router
- NestJS REST architecture
- TypeORM + PostgreSQL integration
- React Three Fiber for 3D rendering
- Internationalization with i18next
- Docker-based local development workflow

## Why This Project Is Interesting

This project combines a modern landing page, a product catalog, a detailed product experience, and an interactive 3D viewer in one application. It is a good example of a full-stack portfolio project that demonstrates both frontend polish and backend structure.

## License

This project is currently for educational and portfolio purposes.
