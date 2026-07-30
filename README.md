# DJO Brothers Engineering & Technology — Corporate Web Platform

An enterprise-grade, production-ready full-stack website for a premier engineering and technology corporation specializing in **Security & Surveillance Systems (Flagship Division)**, **Solar Power Installation**, and **Road & Building Construction**.

---

## 🌟 Key Highlights & Features

- **Flagship Focus**: Deep visual emphasis and detailed technical coverage for **Security & Surveillance Systems** (AI Video Analytics, Thermal & PTZ Cameras, 3D LiDAR, Perimeter Radar, Command & Control Centers, Autonomous Drone Docks, Pipeline & Oil/Gas Security).
- **Modern High-Tech Aesthetic**: Glassmorphism elements, dark/bright section contrasts, sleek gradients, responsive typography, and micro-interactions.
- **Enterprise Architecture**: Strict separation of concerns between `client/` (Vue 3, Vite, Vue Router, Axios) and `server/` (Node.js, Express, PostgreSQL, Knex.js, Joi validation).
- **Production Safety**: Security headers via `helmet`, request logging via `morgan`, rate-limiting via `express-rate-limit`, input sanitization via `Joi`, and async email previews via `Nodemailer`.
- **Validation**: International phone number validation (`+2348012345678`, `+447123456789`), real-time error callouts, loading states, and instant auto-resetting notifications.

---

## 🛠️ Technology Stack

### Frontend (`client/`)
- **Framework**: Vue 3 (Composition API `<script setup>`)
- **Build Tool**: Vite
- **Routing**: Vue Router 4 (with page transition effects and scroll behavior)
- **HTTP Client**: Axios
- **Iconography**: Lucide Vue Next
- **Styling**: Modern CSS variables & utilities (Glassmorphism, custom scrollbar, responsive grid system)

### Backend (`server/`)
- **Runtime**: Node.js & Express.js
- **Database**: PostgreSQL
- **Query Builder & Migrations**: Knex.js
- **Primary Keys**: ULID (Universally Unique Lexicographically Sortable Identifier)
- **Validation**: Joi (Field-level & Schema validation)
- **Security & Utilities**: Helmet, CORS, Compression, Morgan, Express Rate Limit, Nodemailer, Dotenv

---

## 📂 Project Structure

```
djo/
├── client/                      # Vue 3 + Vite Frontend Application
│   ├── public/                  # Favicon & Open Graph assets
│   ├── src/
│   │   ├── assets/              # Design system CSS (variables.css, main.css)
│   │   ├── components/          # Reusable UI Components
│   │   │   ├── common/          # AppHeader, AppFooter, SectionHeader
│   │   │   └── contact/         # EnquiryForm
│   │   ├── router/              # Vue Router configuration
│   │   ├── services/            # Axios API wrappers
│   │   ├── views/               # Page Views (Home, About, Services, Flagship, Solar, Construction, Contact)
│   │   ├── App.vue
│   │   └── main.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                      # Express + PostgreSQL Backend Server
│   ├── src/
│   │   ├── config/              # Database connection & Environment configs
│   │   ├── controllers/         # Enquiry Controller
│   │   ├── database/            # Knex Migrations
│   │   ├── middlewares/         # Error Handler & Rate Limiter
│   │   ├── routes/              # Express API Routes
│   │   ├── services/            # Enquiry Business Logic & Mailer
│   │   ├── utils/               # Logger & Nodemailer Mailer
│   │   ├── validators/          # Joi Enquiry Schema Validator
│   │   └── app.js               # Express App Instance
│   ├── knexfile.js              # Knex Configuration
│   ├── index.js                 # Server Entry Point (Port 5000)
│   ├── .env.example             # Environment Variables Template
│   └── package.json
├── package.json                 # Root script runner (Concurrently)
└── README.md
```

---

## 🗄️ Database Setup & Migrations

The application uses PostgreSQL with Knex.js for database migrations.

### 1. Database Table (`enquiries`)
Columns:
- `id` (VARCHAR 30, Primary Key - ULID)
- `full_name` (VARCHAR 150, Not Null)
- `email` (VARCHAR 255, Not Null)
- `phone_number` (VARCHAR 50, Not Null)
- `service` (VARCHAR 100, Not Null)
- `message` (TEXT, Not Null)
- `status` (VARCHAR 50, Default: 'New')
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### 2. Running Migrations
To create the table in your local or production PostgreSQL database:
```bash
# Set your DB connection credentials in server/.env
cd server
npm run migrate
```

---

## ⚙️ Environment Configuration

Copy `server/.env.example` to `server/.env` and update the values:

```env
NODE_ENV=development
PORT=5000

# PostgreSQL Configuration
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=djo_corporate_db
DB_USER=postgres
DB_PASSWORD=postgres

# CORS & Client Proxy
CORS_ORIGIN=http://localhost:3000

# Nodemailer SMTP (Optional for live email dispatch)
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_username
SMTP_PASS=your_password
SMTP_FROM="AEGIS Enquiries <enquiries@aegis-engineering.com>"
ADMIN_EMAIL="sales@aegis-engineering.com"
```

---

## 🚀 Running the Project Locally

### Install Dependencies
Run npm install in both `server` and `client` directories:
```bash
# In root directory
npm install --prefix server
npm install --prefix client
```

### Development Mode (Concurrent Client & Server)
Start both backend API server (port 5000) and frontend Vite dev server (port 3000):
```bash
npm run dev
```

Or run them individually:
```bash
# Run Server (Port 5000)
npm run dev:server

# Run Client (Port 3000)
npm run dev:client
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API Reference

### Create Enquiry
- **Endpoint**: `POST /api/enquiries`
- **Rate Limit**: 10 requests per 15 minutes per IP
- **Headers**: `Content-Type: application/json`

#### Request Body
```json
{
  "full_name": "Alexander Mercer",
  "email": "alexander@company.com",
  "phone_number": "+2348012345678",
  "service": "Security & Surveillance",
  "message": "We require a site audit and thermal PTZ camera proposal for our oil storage terminal."
}
```

#### Success Response (201 Created)
```json
{
  "success": true,
  "message": "Thank you for your enquiry. Our engineering team will review your request and contact you shortly.",
  "data": {
    "id": "01J3XA9Z81234567890ABCDEF",
    "full_name": "Alexander Mercer",
    "service": "Security & Surveillance",
    "created_at": "2026-07-28T13:30:00.000Z"
  }
}
```

---

## 🧪 Production Build

To build the client application for production:
```bash
npm run build
```
The optimized static build output will be located inside `client/dist/`.
