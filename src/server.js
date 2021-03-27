const express = require('express'); 
const app = express();
const HealthController = require('./controllers/HealthController');
const healthController = new HealthController();
app.use(express.json())
app.get('/', healthController.index)
module.exports = app;