const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes'); 

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

app.use('/', noteRoutes);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
