const express = require('express');
const path = require('path');
const controllers = require(`./controllers/controller.js`);
const port = 8080;

const app = express();
const pathToFrontend = path.join(__dirname, '../frontEnd');

////////////////////////
// Middleware
////////////////////////

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

app.use(logRoutes);
app.use(express.static(pathToFrontend));
app.use(express.json());

// Endpoints
app.get(`/api/trades`, controllers.listData);

// Catch-All
const serve404 = (req, res) => {
  res.status(404).send({ message: `${req.originalUrl} not found.` });
};

app.use(serve404);

app.listen(port, console.log(`Listening on http://localhost:${port}`));
