const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log("received : " + message);
        ws.send("Hello, you sent -> " + message);
    });

    ws.send("Hi there, I am a  WebSocket server");

    for (let i = 0; i < 4; i++)
    {
        ws.send(i);
    }
});

app.get("/test", (req, res) => {
    res.end("ceci est une reponse");
});

server.on("upgrade", (request, socket, head) => {
    console.log(request.url);
});

server.listen(3000, () => {
    console.log("Server started on port " + port);
});