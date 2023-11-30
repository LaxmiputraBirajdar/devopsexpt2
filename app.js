// app.js

// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route to handle HTTP GET requests
app.get('/', (req, res) => {
  // Send an HTML response
  res.send('<h1>Hello, Node.js!</h1>');
});
console.log("ia m king");

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

});
