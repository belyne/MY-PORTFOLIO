const express = require('express');
const router = express.Router();
const Project = require('../models/Project');  // Ensure the correct path to your Project model

// API route for fetching projects
router.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

