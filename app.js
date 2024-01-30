// Import required modules
const express = require('express');

// Create an Express app
const app = express();

/* use EJS as the view engine and specify the directory 
where your views are located*/
app.set('view engine', 'ejs');

// Define routes and direct to diff HTML files

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the environment variable PORT or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// //404 page- order matters, this must be after all other code
// app.use((req,res) => {
//     res.status(404).sendFile('./view/404.html, {root: __dirname});
// });
