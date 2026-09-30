# Full-Stack To-Do App (MERN + TypeScript)

A full-stack Task Manager application built with **React**,
**TypeScript**, **Node.js**, **Express**, and **MongoDB**. The
application allows users to create, view, filter, toggle completion, and
delete tasks with real-time database persistence.

------------------------------------------------------------------------

## 🚀 Tech Stack

### Frontend

-   **React 18** (Vite)
-   **TypeScript**
-   **CSS3** (Custom Modern Styling)
-   **ESLint**

### Backend

-   **Node.js & Express.js**
-   **MongoDB & Mongoose**
-   **dotenv** (Environment Configuration)
-   **CORS**

------------------------------------------------------------------------

## 📁 Project Structure

``` text
capstone3/
├── backend/
│   ├── model/
│   │   └── model.js       # Mongoose schema and model
│   ├── routes/
│   │   └── routes.js      # REST API endpoints (CRUD operations)
│   ├── .env               # Environment variables (MongoDB connection & PORT)
│   ├── package.json
│   └── server.js          # Express server configuration
└── frontend/
    ├── src/
    │   ├── App.css        # Core styles
    │   ├── App.tsx        # Main App component & state handling
    │   ├── TaskForm.tsx   # Controlled input component
    │   ├── types.ts       # TypeScript interfaces
    │   └── main.tsx       # Application entry point
    ├── index.html
    └── package.json
```

## 🛠️ Features

-   **Create Tasks**: Add new tasks using a controlled input form.
-   **Toggle Completion**: Click on any task to mark it as completed or
    active.
-   **Delete Tasks**: Remove unwanted tasks from the database.
-   **Filter Tasks**: View tasks by status (**All**, **Active**, or
    **Completed**).
-   **Active Task Counter**: Displays remaining active tasks
    dynamically.
-   **Database Persistence**: Connected to MongoDB via Mongoose.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   [MongoDB](https://www.mongodb.com/) (MongoDB Atlas URI)

### Setup & Installation

#### 1. Clone or Open Project Root

``` bash
cd capstone3
```

#### 2. Backend Setup

1.  Navigate to the backend directory:

    ``` bash
    cd backend
    ```

2.  Install dependencies:

    ``` bash
    npm install
    ```

3.  Create a `.env` file in the `backend/` directory:

    ``` env
    PORT=5000
    MONGO_URI=mongodb://127.0.0.1:27017/todoapp  replace this with your connection string then /todoapp
    ```

4.  Start the backend server:

    ``` bash
    node server.js
    ```

    The server should be running at `http://localhost:5000`.

#### 3. Frontend Setup

1.  Open a new terminal window and navigate to the frontend directory:

    ``` bash
    cd frontend
    ```

2.  Install dependencies:

    ``` bash
    npm install
    ```

3.  Start the development server:

    ``` bash
    npm run dev
    ```

4.  Open the preview URL (usually `http://localhost:5173`) in your web
    browser.

## 🔌 API Endpoints

  **Method**   **Endpoint**       **Description**
  ------------ ------------------ -------------------------------
  `GET`        `/api/todos`       Get all tasks
  `POST`       `/api/todos`       Create a new task
  `PATCH`      `/api/todos/:id`   Toggle task completion status
  `DELETE`     `/api/todos/:id`   Delete a task
