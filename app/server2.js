const express = require('express');
const path = require('path'); // Add this

const app = express();
const PORT = 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Server 2 is alive! Use the button to test the API.');
});

app.get('/api', (req, res) => {
  res.send('Response from Server 2');
});

app.listen(PORT, () => {
  console.log(`Server 2 running on ${PORT}`);
});