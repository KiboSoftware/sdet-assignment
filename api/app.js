const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('../ui'));

// In-memory storage for orders
let orders = [];
let orderIdCounter = 1;

// Routes

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Get all orders
app.get('/api/orders', (req, res) => {
  res.status(200).json({
    orders: orders,
    total: orders.length
  });
});

// Get order by ID
app.get('/api/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = orders.find(o => o.id === orderId);
  
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  res.status(200).json(order);
});

// Create new order
app.post('/api/orders', (req, res) => {
  const { customerName, email, product, quantity, price } = req.body;
  
  // Basic validation
  if (!customerName || !email || !product || !quantity || !price) {
    return res.status(400).json({ 
      error: 'Missing required fields: customerName, email, product, quantity, price' 
    });
  }
  
  if (quantity <= 0 || price <= 0) {
    return res.status(400).json({ 
      error: 'Quantity and price must be positive numbers' 
    });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  const newOrder = {
    id: orderIdCounter++,
    customerName,
    email,
    product,
    quantity: parseInt(quantity),
    price: parseFloat(price),
    total: parseInt(quantity) * parseFloat(price),
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Update order status
app.patch('/api/orders/:id/status', (req, res) => {
  const orderId = parseInt(req.params.id);
  const { status } = req.body;
  
  const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ 
      error: 'Invalid status. Valid statuses: ' + validStatuses.join(', ') 
    });
  }
  
  const order = orders.find(o => o.id === orderId);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  order.status = status;
  order.updatedAt = new Date().toISOString();
  
  res.status(200).json(order);
});

// Delete order
app.delete('/api/orders/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const orderIndex = orders.findIndex(o => o.id === orderId);
  
  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  orders.splice(orderIndex, 1);
  res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Order API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API docs: http://localhost:${PORT}/api/orders`);
});

module.exports = app;