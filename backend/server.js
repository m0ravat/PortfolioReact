const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Apply CORS before other middleware
server.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['https://moravat.me'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 3001, () => {
  console.log('JSON Server is running');
});

