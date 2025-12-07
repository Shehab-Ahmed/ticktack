# Ticktack - Single Page Application (SPA)

## Overview
Ticktack is a modern and dynamic Single Page Application (SPA) designed to help users manage tasks efficiently. The project showcases a full-stack development workflow with a clean, responsive frontend and a robust backend API.

This project demonstrates advanced skills in building scalable web applications, integrating state management, client-side routing, and responsive design.

---

## Features
- **Task Management:** Create, edit, and delete tasks seamlessly.
- **Responsive UI:** Works perfectly on desktop and mobile devices.
- **Client-Side Routing:** Smooth navigation between pages using Vue Router.
- **State Management:** Global state management using Pinia for a reactive experience.
- **RESTful API:** Backend built with Laravel to handle data and business logic.
- **Bootstrap 5 Styling:** Clean and modern design for a professional look.

---

## Tech Stack
- **Frontend:** Vue 3, Vue Router, Pinia, Bootstrap 5  
- **Backend:** Laravel 12  
- **Database:** MySQL / MariaDB (configurable)  
- **Testing:** PHPUnit  

---

## Installation

### Backend
1. Clone the repository:
```bash
git clone https://github.com/Shehab-Ahmed/ticktack.git
cd ticktack/backend
```
2. Install dependencies:
composer install


3. Configure environment variables:
```bash cp .env.example .env
php artisan key:generate
```

4. Run database migrations:
```bash
php artisan migrate
```

5. Start the server:
```bash
php artisan serve
```

### Frontend
Navigate to the frontend folder:
```bash
cd ../frontend
```

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

### Project Structure
/backend  - Laravel API
/frontend - Vue 3 SPA

Deployment
Ticktack is ready for deployment on a Virtual Private Server (VPS) or any hosting service that supports PHP and Node.js. The application can be accessed publicly and demonstrates professional-level web development practices.

Contribution
This project is a personal portfolio project. Contributions and feedback are welcome to improve functionality and performance.

