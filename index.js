const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Controllers
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');
const newItemController = require('./controllers/newItemController');
const customerController = require('./controllers/customerController');
const cartController = require('./controllers/cartController');
const orderController = require('./controllers/orderController');

// Initialize the app
const app = express();
const PORT = 5500;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // or specify your frontend origin instead of '*'
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/lodge', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB...');
}).catch(err => {
  console.error('Could not connect to MongoDB...', err);
});

// Routes
app.post('/signup', userController.signup);
app.post('/login', userController.login);
app.get('/items', itemController.showItems);
app.get('/newItems', newItemController.newItems);
app.get('/customers', customerController.customers);
app.get('/item/:id', itemController.showItem);
app.get('/items/:category', itemController.getItemsByCategory);
app.post('/cart', cartController.addToCart);
app.get('/cart/:userId', cartController.showCart);
app.post('/order', orderController.addOrder);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
