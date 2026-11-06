# GDGoC UGM 2026/2027 - Front-End Technical Assignment

A responsive web application built for the GDGoC UGM Hacker Track (Front-End) selection process. The application features multi-page navigation and dynamic REST API consumption with proper data fetching states.

## 🚀 Live Demo
- **Deployed Site:** [...]
- **Repository:** [...]

## 🛠️ Tech Stack
- **Framework:** React.js (via Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **API Fetching:** Axios

## ✨ Implemented Pages & Features
1. **About Page (`/about`)**:
   - Sliced design from official Figma reference.
   - Dynamic REST API integration (`https://gdgoc-ugm-api.vercel.app/api/navigation`).
   - Comprehensive state handling: **Loading Spinner**, **Error Boundary**, and **Data Render**.
2. **Contact Page (`/contact`)**:
   - Interactive contact form with simulated submission feedback.
   - Structured organization contact card details.

## 💻 Local Development Setup

Clone the repository and run the development server locally:

```bash
# 1. Clone repository
git clone <URL_REPO_GITHUB_KAMU>
cd gdgoc-frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev