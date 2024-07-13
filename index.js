require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('./cronJobs/weatherReportCron');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => console.log(error));
