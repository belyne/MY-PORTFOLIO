const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const indexRouter = require('./routes/index');
const projectsRouter = require('./routes/projects');

// Connect to MongoDB
db_connection = mongoose.connect('mongodb://localhost:27017/portfolio');

console.log(`Connecting to MongoDB`);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files (like CSS, images) from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes
app.use('/', indexRouter);
app.use('/projects', projectsRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
