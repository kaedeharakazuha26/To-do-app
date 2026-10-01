require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/routes');

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Initiate MongoDB Connection immediately
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Todo API is running...');
});

app.use('/api/todos', todoRoutes);

// Only listen on PORT when running locally (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

app.use(
  cors({
    origin: 'https://todo-app-jhomar.vercel.app/', // Or add your new frontend Vercel URL here
  })
);

module.exports = app;