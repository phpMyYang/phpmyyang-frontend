# phpMyYang Portfolio - Frontend UI 💻

This is the interactive and responsive frontend of the phpMyYang Developer Portfolio, built with **React 19 and Vite**. It features a modern, tech-focused design with custom animations, glassmorphism UI, advanced performance optimizations, and full Docker support.

## 🛠️ Tech Stack

- **Framework:** React.js 19 (via Vite)
- **Containerization:** Docker & Docker Compose
- **Styling:** Bootstrap 5 & Custom CSS (Glassmorphism)
- **Icons:** Bootstrap Icons
- **Security:** React Google reCAPTCHA
- **Animations:** HTML5 Canvas (Binary Rain Effect)

## ✨ Key Features

- **Decoupled Docker Architecture:** Runs in an isolated container ensuring environment consistency across different machines.
- **Performance Optimized (Lazy Loading):** Implements `React.lazy` and `Suspense` with custom `SkeletonLoader` fallbacks for lightning-fast initial page loads.
- **Interactive UI Components:** Features auto-adjusting, hover-triggered iframe modals for real-time Certificate and CV previews.
- **Drag-and-Drop Theme Switcher:** Fully interactive, movable theme toggle widget.
- **Security & Policy Modal:** Session-stored unified Terms and Policy modal requiring explicit user consent before full site interaction.
- **Matrix/Binary Rain Background:** A high-performance, subtle binary rain animation running via HTML5 Canvas.
- **Secure Contact Integration:** Connects seamlessly to the Laravel backend API with Google reCAPTCHA v2 validation.

## 📋 Prerequisites

Make sure you have the following installed on your local machine:

- **Docker Desktop** (or Docker Engine + Docker Compose Plugin)
- _(No local Node.js or npm installation is required as everything runs inside Docker)_

## 🚀 Installation & Setup

1. **Clone the repositories (Workspace Setup)**
   Since this is a decoupled architecture, create a workspace folder and clone both the backend and frontend repositories inside it.

   ```bash
   mkdir phpmyyang-portfolio
   cd phpmyyang-portfolio

   # Clone Frontend
   git clone [https://github.com/yourusername/phpmyyang-frontend.git](https://github.com/yourusername/phpmyyang-frontend.git)

   # Clone Backend (Required for full API functionality)
   git clone [https://github.com/yourusername/phpmyyang-backend.git](https://github.com/yourusername/phpmyyang-backend.git)
   ```

````


2. **Set up environment variables**
   Navigate into the frontend directory, create a .env file (ensure it's ignored by Git), and configure your API endpoint and reCAPTCHA site key:

   ```bash
   cd phpmyyang-frontend
   touch .env
   Add the following inside your .env:

   Code snippet
   # API URL for Laravel Backend
   VITE_API_BASE_URL=http://localhost:8000

   # Google reCAPTCHA v2 Site Key
   VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
   Run the Docker Environment
   Navigate back to your main workspace folder (phpmyyang-portfolio) where your docker-compose.yml is located, and build the containers:

   ```bash
   cd ..
   docker compose up -d --build
   The frontend application will now be running and accessible at http://localhost:5173.

````

3. **📦 Building for Production**
   If you need to build the app for traditional production hosting (without Docker), you can run the build command inside the container:

   ```bash
   docker exec -it phpmyyang-frontend npm run build
   This will generate optimized static files in the dist folder ready for deployment (e.g., Vercel, Hostinger, Netlify).
   ```
