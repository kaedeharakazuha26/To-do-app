# 📝 Full-Stack To-Do App (MERN + TypeScript)

A full-stack **Task Manager application** built with **React**, **TypeScript**, **Node.js**, **Express.js**, and **MongoDB**.

The application allows users to create, view, filter, toggle completion, and delete tasks with **real-time database persistence**.

## 🌐 Live Demo

🚀 **[View the Live Application](https://frontend-jhomar.vercel.app/)**

> The frontend is publicly deployed on **Vercel**. The backend deployment URL is intentionally not included in this README.

---

## 🚀 Tech Stack

### Frontend

* **React 18** — UI library
* **Vite** — Frontend development and build tool
* **TypeScript** — Type-safe JavaScript
* **CSS3** — Custom modern styling
* **ESLint** — Code quality and linting

### Backend

* **Node.js & Express.js** — Backend and REST API
* **MongoDB & Mongoose** — Database and object modeling
* **dotenv** — Environment configuration
* **CORS** — Cross-Origin Resource Sharing

---

## 🛠️ Features

* **Create Tasks** — Add new tasks using a controlled input form.
* **Toggle Completion** — Mark tasks as completed or active.
* **Delete Tasks** — Remove unwanted tasks from the database.
* **Filter Tasks** — Filter tasks by:

  * All
  * Active
  * Completed
* **Active Task Counter** — Displays the number of remaining active tasks.
* **Database Persistence** — Tasks are stored in MongoDB using Mongoose.
* **REST API** — Frontend communicates with the backend through RESTful API endpoints.
* **Responsive Interface** — Designed to work across different screen sizes.

---

## 📁 Project Structure

```text
capstone3/
│
├── backend/
│   ├── model/
│   │   └── model.js
│   │       # Mongoose schema and model
│   │
│   ├── routes/
│   │   └── routes.js
│   │       # REST API endpoints / CRUD operations
│   │
│   ├── .env
│   │   # Environment variables
│   │
│   ├── package.json
│   └── server.js
│       # Express server configuration
│
└── frontend/
    ├── src/
    │   ├── App.css
    │   │   # Core application styles
    │   │
    │   ├── App.tsx
    │   │   # Main App component and state handling
    │   │
    │   ├── TaskForm.tsx
    │   │   # Controlled task input component
    │   │
    │   ├── types.ts
    │   │   # TypeScript interfaces
    │   │
    │   └── main.tsx
    │       # Application entry point
    │
    ├── index.html
    └── package.json
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) — v18 or higher recommended
* [MongoDB](https://www.mongodb.com/) — MongoDB Atlas or a local MongoDB installation
* npm — Included with Node.js

---

## 📦 Setup & Installation

### 1. Clone or Open the Project

Navigate to the project root:

```bash
cd capstone3
```

---

## 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the backend dependencies:

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string/todoapp
```

### MongoDB Atlas Example

Replace the connection string with your own MongoDB Atlas connection string.

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
```

> **Security:** Never commit your `.env` file to GitHub. Add `.env` to your `.gitignore` file.

Example:

```gitignore
.env
node_modules/
```

### Start the Backend

Run:

```bash
node server.js
```

The local backend server should run on:

```text
http://localhost:5000
```

---

## 3. Frontend Setup

Open a **new terminal window** and navigate to the frontend:

```bash
cd frontend
```

Install the frontend dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The development server will usually be available at:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 🔌 API Endpoints

The application uses RESTful API endpoints to communicate between the React frontend and Express backend.

| Method   | Endpoint         | Description                   |
| -------- | ---------------- | ----------------------------- |
| `GET`    | `/api/todos`     | Get all tasks                 |
| `POST`   | `/api/todos`     | Create a new task             |
| `PATCH`  | `/api/todos/:id` | Toggle task completion status |
| `DELETE` | `/api/todos/:id` | Delete a task                 |

---

# 🔄 Application Flow

```text
┌──────────────────────────────┐
│          React App           │
│      TypeScript + Vite       │
└──────────────┬───────────────┘
               │
               │ HTTP Requests
               ▼
┌──────────────────────────────┐
│       Express.js API         │
│        Node.js Backend       │
└──────────────┬───────────────┘
               │
               │ Mongoose
               ▼
┌──────────────────────────────┐
│           MongoDB            │
│        Todo Database         │
└──────────────────────────────┘
```

### Data Flow

1. The user interacts with the React application.
2. React sends a request to the Express API.
3. Express processes the request.
4. Mongoose communicates with MongoDB.
5. MongoDB stores or retrieves the task data.
6. The backend returns the response.
7. React updates the user interface.

---

# 🎯 Learning Objectives

This project demonstrates practical experience with:

* React 18
* TypeScript
* Vite
* Component-based development
* React state management
* Controlled form components
* REST API development
* Express.js
* Node.js
* MongoDB
* Mongoose
* CRUD operations
* Environment variables
* CORS
* Frontend and backend integration
* Full-stack application development

---

# 🔐 Security Notes

The project uses environment variables for sensitive configuration.

The following information should **not** be committed to GitHub:

* MongoDB username
* MongoDB password
* MongoDB connection string
* Backend deployment credentials
* Other private environment variables

The backend URL is intentionally **not displayed in this README**.

For deployment, environment variables should be configured through the hosting provider's environment-variable settings instead of being hardcoded into the source code.

---

# 🌐 Deployment

### Frontend

The frontend is deployed using **Vercel**.

🚀 **[Open the Live Application](https://frontend-jhomar.vercel.app/)**

### Backend

The backend is deployed separately and is connected to the frontend through the application's API configuration.

> The backend deployment URL is intentionally excluded from this public README.

---

# 🔮 Future Improvements

Possible future improvements include:

* [ ] User authentication and registration
* [ ] User-specific task lists
* [ ] Edit existing tasks
* [ ] Task priorities
* [ ] Due dates
* [ ] Search functionality
* [ ] Dark mode
* [ ] Drag-and-drop task organization
* [ ] Pagination
* [ ] Toast notifications
* [ ] Improved responsive design
* [ ] Task categories
* [ ] Production optimizations

---

# 👨‍💻 Author

**Jhomar John Picar**

**Full-Stack Web Developer**

---

## 📄 License

This project was created for **learning and educational purposes**.
