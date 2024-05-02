import { createServer } from "http";

// param1 = incoming request, param2 = response we´re sending back
// Create HTTP server
const server = createServer((req, res) => {
  // Handle requests based on the URL
  if (req.url === "/") {
    // set content type in the response headers
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Here is a short story");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>Can't find the page</p>
    <a href="/">Go back home</a>
    `);
  }
});

server.listen(5001, () => {
  console.log("Server is running on port 5001");
});
