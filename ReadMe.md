// if project not run please follow the steps
//pass the command in terminal 
//cd client -  navigate in front-end 
//npm install 
//npm start - run front-end
//cd ..
//cd server -  navigate in back-end
//npm install
//node index.js -  run-back-end


The most important step: you need to create a .env file in the server folder.
1. Copy .env.example to .env
2. Open the .env file and fill in your real values
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_secret_key_here
PORT=5000


 Notes 

Make sure MongoDB is installed and running.
Set up the .env file before starting the backend server.
Default backend port is 5000 unless you change it in .env.


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
│   ├── .env.example
│   ├── .env --> you create this file yourself and copy .env.example 
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

