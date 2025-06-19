// Import required modules
const express = require('express');
const path = require('path');

// Create an instance of an Express application
const app = express();
const PORT = 3000;

// Middleware to serve static files from the "public" directory
// This allows access to HTML, CSS, JS, images, and other assets in "public"
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Route to explicitly serve the data.json file
// This is not strictly necessary since it's already covered by the static middleware
app.get('/data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'data.json'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

