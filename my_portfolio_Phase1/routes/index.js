const express = require('express');
const router = express.Router();
const Project = require('../models/Project');  // Ensure the correct path to your Project model

// Sample data for projects
const projects = [
  {
    title: "Project 1",
    description: "Description for project 1",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "http://example.com/project1"
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "http://example.com/project2"
  }
  // Add more projects as needed
];


// Route to render home.ejs
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.render('home', { projects });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/projects', (req, res) => {
    res.render('projects', { projects });
});

router.get('/skills', (req, res) => {
    res.render('skills');
});

module.exports = router;
