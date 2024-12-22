const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (count === 10) {
      clearInterval(interval);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});