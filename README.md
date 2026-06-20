# phpMyYang Portfolio - Frontend UI 💻

This is the interactive and responsive frontend of the phpMyYang Developer Portfolio, built with **React and Vite**. It features a modern, tech-focused design with custom animations, glassmorphism UI, and a dynamic HTML5 canvas background.

## 🛠️ Tech Stack

- **Framework:** React.js (via Vite)
- **Styling:** Bootstrap 5 & Custom CSS (Glassmorphism)
- **Icons:** Bootstrap Icons
- **Security:** React Google reCAPTCHA
- **Animations:** HTML5 Canvas (Binary Rain Effect)

## ✨ Key Features

- **Matrix/Binary Rain Background:** A high-performance, subtle binary rain animation running via HTML5 Canvas.
- **Glassmorphism UI:** Modern translucent cards and sections with backdrop blur.
- **Secure Contact Integration:** Connects directly to the Laravel API and includes Google reCAPTCHA v2 to prevent spam.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop viewing.

## 📋 Prerequisites

Make sure you have the following installed:

- Node.js (v18+ recommended)
- npm or yarn

## 🚀 Installation & Setup

1. **Clone the repository**

```bash
   git clone [https://github.com/yourusername/phpmyyang-frontend.git](https://github.com/yourusername/phpmyyang-frontend.git)
   cd phpmyyang-frontend

```

2. **Install dependencies**

```bash
   npm install

```

3. **Set up environment variables**
   Create a `.env` file in the root directory (make sure it's included in your `.gitignore`) and add your reCAPTCHA site key:

```env
   VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here

```

4. **Run the Development Server**

```bash
   npm run dev

```

The application will be available at `http://localhost:5173`.

## 📦 Building for Production

To build the app for production, run:

```bash
npm run build

```

This will generate optimized static files in the `dist` folder ready for deployment.
