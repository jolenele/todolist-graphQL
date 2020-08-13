const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const host = 'localhost';
const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.use(express.json({ extended: false }));
app.use(cors());

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Todo list server.');
};

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
