const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const { MONGO_URI } = process.env;

app.use(cors());
app.use(bodyParser.json());

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    const authRoutes = require('./src/routes/authRoutes');
    const departmentRoutes = require('./src/routes/departmentRoutes');
    const employeeRoutes = require('./src/routes/employeeRoutes');

    app.use('/auth', authRoutes);
    app.use('/departments', departmentRoutes);
    app.use('/employees', employeeRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

startServer();
