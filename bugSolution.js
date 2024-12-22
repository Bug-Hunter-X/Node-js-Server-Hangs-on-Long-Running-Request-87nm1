const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  const worker = new Worker('./longTask.js');

  worker.on('message', result => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result);
  });

  worker.on('error', err => {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// longTask.js
let count = 0;
const interval = setInterval(() => {
  count++;
  if (count === 10) {
    clearInterval(interval);
    postMessage('Hello from worker thread!');
  }
}, 100);