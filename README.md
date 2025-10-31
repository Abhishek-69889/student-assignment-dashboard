# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Student Management / Assignment Dashboard

A responsive and dynamic Student-Professor Dashboard built using React and Tailwind CSS.
Students can view assignments, mark them as submitted, and professors can track submission progress in real-time with visually appealing progress indicators.

Features

Role-based View Switching: Instantly switch between Student and Professor views.

Assignment Tracking: Students mark submissions; professors view progress.

Responsive UI: Designed with Tailwind CSS for a clean, modern layout.

Interactive Components: Smooth transitions and conditional rendering for better user experience.

Project Architecture Overview

This is a frontend-only project built with React’s component-driven architecture.
It uses state management via React Hooks (useState) and context-based user switching.

Flow:

App.jsx
 ├── Navbar (User Switch + Current Role Display)
 ├── StudentDashboard (Displays assignments + submission buttons)
 └── AdminDashboard (Displays assignment list + progress bars)

Project Setup Instructions

Clone the repository

git clone https://github.com/Abhishek-69889/student-assignment-dashboard.git
cd student-assignment-dashboard


Install dependencies

npm install
npm i lucid-react

Run the development server

npm run dev


The project will run on http://localhost:5173

Build for production

npm run build

Folder Structure Overview
student-portal/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── AssignmentList.jsx
│   │   └── AdminAssignmentList.jsx
│   ├──Page/
│   │  ├── StudentDashboard.jsx
│   │  ├── AdminDashboard.jsx
│   ├── data.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│   └── favicon.ico
│
├── package.json
└── tailwind.config.js

Component Structure and Design Decisions
Component	Responsibility	Design Choice
Navbar	Profile image and Name of the User
Sidebar Switch between admin and student role
StudentDashboard	Lists assignments and submission status	Clean card layout with button interactions
AdminDashboard	Displays assignment completion progress	Uses progress bars for visual clarity
AssignmentList	Reusable component for student assignments	Consistent card spacing and responsive layout
AdminAssignmentList	Handles admin progress tracking	Uses colored bars for quick progress visualization
Design Philosophy

Simplicity: Focused on a clear, minimal design.

Reusability: Built from modular, reusable components.

Responsiveness: Works seamlessly across desktop and mobile.

Scalability: Can be extended with backend or database integration later.

Tech Stack

React 18 – Component-based UI library

Tailwind CSS – Utility-first styling

Vite – Fast bundler for modern React apps




