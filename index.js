import express from "express";
import { Server } from "socket.io";
import http from "http";
// import path from "path";
// import { fileURLToPath } from "url";

const app = express();
const server = http.createServer(app);
const io = new Server(server);


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index");
});

// Socket.IO connection
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    io.emit("customEvent", "A user has connected");
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
        io.emit("customEvent", "A user has disconnected");
    });
});

io.on("hello", (data) => {
    console.log("Custom ", data);
    // io.emit("customEvent", "Hello from the server!");
});


server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
