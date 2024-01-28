const express = require('express');
const app = express();

app.get('/cats', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Cats</title>
                <style>
                    body {
                        background-color: #f2f2f2;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #333;
                        font-size: 36px;
                        margin-bottom: 20px;
                    }
                    img {
                        width: 300px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                        margin-bottom: 20px;
                    }
                    p {
                        color: #666;
                        font-size: 18px;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Cats Page</h1>
                <img src="https://static.vecteezy.com/system/resources/previews/024/212/236/original/ai-generated-sticker-three-cool-cats-at-sunset-png.png" alt="Cute Cat" style="width: 100%; max-width: 300px;">
                <p>This is a page dedicated to cats. Enjoy!</p>
            </body>
        </html>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>About</title>
                <style>
                    body {
                        background-color: #f2f2f2;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #333;
                        font-size: 36px;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #666;
                        font-size: 18px;
                    }
                </style>
            </head>
            <body>
                <h1>About Page</h1>
                <p>This is the about page of our website. We are a team of developers dedicated to creating amazing web applications.</p>
            </body>
        </html>
    `);
});

app.get('/blog/:category/:judul/:author', (req, res) => {
    const { category, judul, author } = req.params;
    res.send(`
        <html>
            <head>
                <title>Blog</title>
                <style>
                    body {
                        background-color: #f2f2f2;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #333;
                        font-size: 36px;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #666;
                        font-size: 18px;
                    }
                </style>
            </head>
            <body>
                <h1>Blog Page</h1>
                <p>This is a Blog page:</p>
                <p>Category: ${category}</p>
                <p>Judul: ${judul}</p>
                <p>Author: ${author}</p>
            </body>
        </html>
    `);
});

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send('<h1>Nothing found if nothing searched!</h1>');
    }
    res.send(' <h1>Search results for: ' + q + '</h1>');
});

app.get("*", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>404</title>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    img {
                        max-width: 100%;
                        max-height: 100%;
                    }
                </style>
            </head>
            <body>
                <img src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg" alt="404 Error">
            </body>
        </html>
    `);
});

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});

app.post('/cats', (req, res) => {
    res.send('This is a POST request from /cats');
});