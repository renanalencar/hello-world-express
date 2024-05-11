// app.js
// const http = require("http");
const express = require("express");
const app = express();

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Olá Mundo!\\n");
// });

// server.listen(3000, "127.0.0.1", () => {
//   console.log("Servidor rodando em <http://127.0.0.1:3000/>");
// });

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
