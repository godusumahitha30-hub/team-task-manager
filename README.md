Team Task Manager (Full-Stack MERN App)
A full-stack web application to manage projects and tasks with authentication, role-based access, and dashboard tracking.
🚀 Live Demo
🌐 Frontend: https://your-vercel-link.vercel.app
⚙️ Backend API: https://team-task-manager-production-23c5.up.railway.app
📂 Features
User Authentication (Login / Signup)
Create & manage projects
Task creation and assignment
Task status tracking
Dashboard view of all projects
REST API backend
MongoDB database integration
🛠️ Tech Stack
Frontend:
React.js
Axios
React Router DOM
Backend:
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication
📁 Project Structure

team-task-manager/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── services/
│   ├── App.js
│
└── README.md
⚙️ Installation (Run Locally)
1. Clone repository
Bash
git clone https://github.com/your-username/team-task-manager.git
2. Backend setup
Bash
cd backend
npm install
Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
PORT=5000
Run backend:
Bash
node server.js
3. Frontend setup
Bash
cd frontend
npm install
npm start
🔗 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login
Projects
GET /api/projects
POST /api/projects
🌐 Deployment
Backend (Railway)
Hosted on Railway
Uses MongoDB Atlas
Frontend (Vercel)
React deployed on Vercel
Connected to Railway backend API
📌 How It Works
User logs in or signs up
JWT token is generated
User creates projects
Projects are stored in MongoDB
Dashboard fetches and displays projects
👨‍💻 Author
Developed as part of internship assignment
Full-stack MERN application
