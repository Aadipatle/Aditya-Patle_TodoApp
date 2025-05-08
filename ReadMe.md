// if project not run please follow the steps
//pass the command in terminal 
//cd client -  navigate in front-end 
//npm install 
//npm start - run front-end
//cd ..
//cd server -  navigate in back-end
//npm install
//node index.js -  run-back-end




// This is a complete full-stack To-Do app structure outline.
// Due to size constraints, I will start with the project structure and then add individual parts upon your request.

// ==== 📁 Project Folder Structure (High-level Overview) ====

FullStack-Todo-App/
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── .env
│   ├── index.js
├── client/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   └── store.js
│   │   │   │   ├── authSlice.js
│   │   │   │   ├── taskSlice.js
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
├── README.md

// ==== ✨ Features to be implemented ====
// Frontend (React, Redux Toolkit):
// - Register/Login pages with form validation
// - Task dashboard (create, read, update, delete tasks)
// - Filter/Search tasks
// - Pagination for tasks (10 per page)
// - Status toggle (DONE/PENDING)
// - Fully responsive with TailwindCSS (no UI library)

// Backend (Node.js, Express, MongoDB, Mongoose):
// - User model with email/password (hashed)
// - Task model with reference to user
// - JWT-based authentication middleware
// - REST API endpoints: /auth/register, /auth/login, /tasks
// - Routes protected for authenticated users only

// ✅ All these components will be filled in upon your request.
// Let me know which part you'd like me to start building: Backend API, Redux setup, or React UI?