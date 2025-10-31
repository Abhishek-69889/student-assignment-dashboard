import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [tailwindcss(),react()],
})

// Student Management / Assignment Dashboard

// A responsive and dynamic Student-Professor Dashboard built using React and Tailwind CSS.
// Students can view assignments, mark them as submitted, and professors can track submission progress in real-time with visually appealing progress indicators.

// Features

// Role-based View Switching: Instantly switch between Student and Professor views.

// Assignment Tracking: Students mark submissions; professors view progress.

// Responsive UI: Designed with Tailwind CSS for a clean, modern layout.

// Interactive Components: Smooth transitions and conditional rendering for better user experience.

// Project Architecture Overview

// This is a frontend-only project built with React’s component-driven architecture.
// It uses state management via React Hooks (useState) and context-based user switching.

// Flow:

// App.jsx
//  ├── Navbar (User Switch + Current Role Display)
//  ├── StudentDashboard (Displays assignments + submission buttons)
//  └── AdminDashboard (Displays assignment list + progress bars)

// Project Setup Instructions

// Clone the repository

// git clone https://github.com/yourusername/student-portal.git
// cd student-portal


// Install dependencies

// npm install


// Run the development server

// npm run dev


// The project will run on http://localhost:5173

// Build for production

// npm run build

// Folder Structure Overview
// student-portal/
// │
// ├── src/
// │   ├── components/
// │   │   ├── Navbar.jsx
// │   │   ├── StudentDashboard.jsx
// │   │   ├── AdminDashboard.jsx
// │   │   ├── AssignmentList.jsx
// │   │   └── AdminAssignmentList.jsx
// │   │
// │   ├── data/
// │   │   └── data.js
// │   │
// │   ├── App.jsx
// │   ├── main.jsx
// │   └── index.css
// │
// ├── public/
// │   └── favicon.ico
// │
// ├── package.json
// └── tailwind.config.js
