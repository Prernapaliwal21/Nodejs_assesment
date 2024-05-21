const http = require('http');
const app = require('./app');

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO server (if needed, just for example)
const { initializeSocketIo } = require('./utils/socketIo');
initializeSocketIo(server);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
