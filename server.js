const express = require('express');
const faker = require('faker');
const path = require('path'); // Add this line to use the 'path' module

const app = express();
const port = 8000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL "/"
app.get('/', (req, res) => {
  // Render the 'index' view
  res.render('index');
});

// Define a route to get random data
app.get('/randomData', (req, res) => {
  // Generate random data using faker
  const randomName = faker.name.findName();
  const randomEmail = faker.internet.email();

  // Send JSON response with random data
  res.json({ randomName, randomEmail });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
