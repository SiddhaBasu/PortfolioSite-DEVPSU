//const http = require("node:http");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

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

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/projects', (req, res) => {
    res.render('projects.ejs', { projects });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

/*
const server = http.createServer((req, res) => {

    let filePath = __dirname + '/public/index.html';

    //console.log(req.url);

    switch(req.url) {
        case '/about': 
            filePath = __dirname + '/public/about.html';
            break;
        default:
            //filePath = __dirname + '/public/index.html';
            break;
    }

    res.render

    fs.readFile(filePath, (err, data) => {
        res.statusCode = 200; // ok
        res.setHeader('Content-Type', 'text/html');
        res.end(data, 'utf8');
    })
})



server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
*/
