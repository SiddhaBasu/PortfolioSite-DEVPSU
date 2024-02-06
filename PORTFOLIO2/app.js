// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

// Sample projects data
const projects = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1' },
    { id: 2, title: 'Project 2', description: 'Description for Project 2' },
    // Add more projects as needed
];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/projects', (req, res) => {
    res.render('projects.ejs', { projects });
});

app.get('/project/:id', (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = projects.find(proj => proj.id === projectId);

    if (project) {
        res.render('project.ejs', { project });
    } else {
        res.status(404).send('Project not found');
    }
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.post('/contact', (req, res) => {
    // Handle form submission (you can add logic to send emails, etc.)
    const { name, email, message } = req.body;
    console.log(`Received contact form submission: ${name}, ${email}, ${message}`);
    res.redirect('/contact'); // Redirect to contact page (you can customize this)
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
