const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

const projects = [
    {
        title: 'Portfolio Website',
        description: 'Portfolio website that displays basic professional information such as a bio, resume, contact info, and also showcases projects. Developed with Node.js',
        image: 'node-js-736399_1280.png',
        link: 'https://github.com/SiddhaBasu/PortfolioSite-DEVPSU'
    },
    {
        title: 'Project 2 Title',
        description: 'Project 2 Description',
        image: 'path/to/project2_image.jpg',
        link: 'project2_link'
    },
    // Add more projects as needed
];

app.get('/projects', (req, res) => {
    res.render('projects.ejs', { projects });
});