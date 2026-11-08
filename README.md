# GDGoC UGM 2026/2027 - Front-End Technical Assignment

A responsive web application built for the GDGoC UGM Hacker Track (Front-End) selection process. The application features multi-page navigation, pixel-perfect design slicing, and dynamic REST API consumption with robust data fetching states.

## 🚀 Live Demo
- **Deployed Site:** [kiara-gdgoc-frontend.vercel.app](https://kiara-gdgoc-frontend.vercel.app/)
- **Repository:** [github.com/kiy0raaaa/gdgoc-frontend](https://github.com/kiy0raaaa/gdgoc-frontend)
- **Video Presentation:** [Kiara - GDGoC Video Presentation](https://drive.google.com/file/d/1OT1Hkg7zQbe_LB3204Q0FdgTxpWpur_r/view?usp=sharing)

## 🛠️ Tech Stack
- **Framework:** React.js (via Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **API Fetching:** Axios
- **Deployment:** Vercel

## ✨ Implemented Features

### 📄 Pages (Design Slicing)
1. **Landing Page (`/`)**: Main entry page with responsive UI/UX and pixel-perfect design following the Figma tokens.
2. **Overview Page (`/#overview`)**: Dynamic REST API integration (`https://gdgoc-ugm-api.vercel.app/api`). Displays data dynamically with comprehensive state handling.
3. **About Page (`/about`)**: Community profile and information page sliced from the official Figma reference.
4. **Contact Page (`/contact`)**: Interactive contact information page with structured organization contact card details.

### ⚙️ Technical Implementations
- **Robust State Handling**: 
  - *Loading State*: Smooth blue spinner animation when fetching data.
  - *Error State*: Friendly error boundary message with a "Coba Lagi" (reload) button if the server fails.
  - *Empty State*: Clean fallback UI if the API returns an empty array (`[]`).
- **Clean Component Architecture**: Extracted `Navbar` and `Footer` into independent global components in `App.jsx` to prevent excessive re-renders and maintain consistent layout heights.
- **Client-Side Routing Patch**: Applied `vercel.json` configuration to ensure React Router works perfectly and prevents `404 Not Found` errors upon page refresh in production.

## 💻 Local Development Setup

Clone the repository and run the development server locally:

```bash
# 1. Clone repository
git clone [https://github.com/kiy0raaaa/gdgoc-frontend.git](https://github.com/kiy0raaaa/gdgoc-frontend.git)
cd gdgoc-frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev