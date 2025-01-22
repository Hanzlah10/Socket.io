const socket = io();


socket.on("connect", () => {
    console.log(`Connected to server with ID: ${socket.id}`);
});


socket.on("customEvent", (data) => {
    console.log("Custom event received:", data);
    socket.emit("hello", "Hello from the client!");
});
