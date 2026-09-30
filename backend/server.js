//load env first
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/routes');

const app = express();

//access variables from process.env
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/todos', todoRoutes);

//mongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));