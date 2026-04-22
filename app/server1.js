const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.get('/api', (req, res) => {
  res.send('Response from Server 1');
});

app.listen(PORT, () => {
  console.log(`Server 1 running on ${PORT}`);
});