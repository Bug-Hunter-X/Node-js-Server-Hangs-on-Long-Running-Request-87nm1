# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js where a long-running request can cause the server to hang, making it unresponsive to other requests.  The problem stems from Node.js's single-threaded event loop.  When a request blocks the event loop for an extended period, no other events can be processed.

## Bug

The `bug.js` file contains a simple HTTP server that simulates a long-running task.  This task intentionally takes some time to complete, blocking the event loop during that time.  Try sending multiple requests to the server; you'll observe that subsequent requests are not processed until the first request completes.

## Solution

The `bugSolution.js` file demonstrates how to resolve this issue using worker threads. Worker threads allow you to offload long-running tasks to separate threads, preventing them from blocking the main event loop.  This keeps the server responsive to other requests.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`.
4. Send multiple requests to `http://localhost:3000` using a tool like `curl` or your browser.  Observe the behavior.
5. Run `node bugSolution.js`.  Repeat step 4. Observe the improved responsiveness.
