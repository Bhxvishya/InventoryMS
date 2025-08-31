# Inventory Management App

A simple, frontend-only inventory management application built with Remix, React, and TypeScript. This app allows users to track inventory items locally in their browser using `localStorage`. It is designed for personal use, with data isolated per user and no backend or database integration.

## 🚀 Features

- **Real-time Inventory Tracking**: Perform CRUD (Create, Read, Update, Delete) operations on inventory items.
- **Transaction Management**: Filter and search transactions with an intuitive interface.
- **Responsive Dashboard**: View analytics and data visualizations, optimized for all devices.
- **Theme Switching**: Supports dark/light mode with system preference detection.
- **Form Validation**: Robust error handling for user inputs.
- **Modern UI/UX**: Gradient designs, animations, and accessibility compliance.

## 📋 Project Overview

This is a **frontend-specific** application, meaning all data is stored locally in the user's browser via `localStorage`. There is no backend, database, or API, so data is not shared between users or devices.

### Limitations

- **🔍 Data Storage**:
  - Uses browser `localStorage` only.
  - No database (e.g., PostgreSQL, MongoDB).
  - No backend API; purely client-side JavaScript.
- **❌ Major Issues**:
  - **No Data Sharing**: Data added by one user is not visible to others.
  - **Data Loss**: Clearing browser data deletes all inventory data.
  - **No Persistence**: Each browser session is isolated.
  - **No Server Memory Usage**: Data is stored client-side only.

### 🏗️ Current Architecture

- **User's Browser** ↔ **Remix App** ↔ **User's localStorage**
- Each user has isolated data stored in their browser.

## 🛠️ Technologies & Tools

- **Frontend Framework**: React 18, Remix v2 (with Vite bundler)
- **Programming Languages**: TypeScript, JavaScript (ES6+), HTML5, CSS3
- **Styling**: Tailwind CSS, PostCSS, responsive design, dark/light mode
- **State Management**: React Hooks (`useState`, `useEffect`, `useContext`)
- **Build Tools**: Vite, npm, ESLint, TypeScript Compiler
- **Development**: Server-Side Rendering (SSR), client-side hydration
- **Data Management**: Browser `localStorage`, JSON data serialization
- **UI/UX**: Modern gradient designs, animations, accessibility compliance
- **Version Control**: Git, component-based architecture
- **Deployment**: Production-ready builds, static asset optimization

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Bhxvishya/inventory-management.io.git
cd inventory-management.io
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Development

Run the development server:

```bash
npm run dev
```

Access the app at `http://localhost:3000` (or another port if configured).

## 🚀 Deployment

1. Build the app for production:
```bash
npm run build
```
This generates the `build/server` and `build/client` folders.

2. Run in production mode:
```bash
npm start
```

3. Deploy the `build/server` and `build/client` folders to a hosting platform (e.g., Vercel, Netlify, or Render).

## 🌐 Hosting

The app is frontend-only and can be hosted on static hosting platforms like Vercel, Netlify, or GitHub Pages. For a full-stack setup, see the **Backend Integration** section below.

## 🔧 Backend Integration

To transform this into a **multi-user app** with shared data and persistence, add a backend database. Options include:

1. **Add a Database to Current Setup**:
```bash
npm install prisma @prisma/client
npm install -D prisma
npx prisma init
```

2. **Use a Backend-as-a-Service**:
   - Supabase (PostgreSQL + Auth)
   - Firebase (NoSQL + Auth)
   - PlanetScale (MySQL)

3. **Full Backend Rewrite**:
   - Use Express.js or Fastify.
   - Add a database (PostgreSQL, MongoDB).
   - Create REST or GraphQL APIs.

Using a service like Supabase will enable:
- ✅ Shared data across users
- ✅ Permanent data persistence
- ✅ User authentication
- ✅ Free deployment options

## 🤝 Contributing

Want to add or remove features? Contact me at [bhavishy.sharma@gmail.com](mailto:bhavishy.sharma@gmail.com) to discuss contributions or customizations!

## 📜 License

This project is licensed under the MIT License.

## Footer

© 2025 Bhavishya Sharma