import express from 'express';
import cors from 'cors';
import { mockProducts, mockOrders } from './api/data.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Products API
app.get('/api/products', (req, res) => {
  res.json(mockProducts);
});

app.get('/api/products/:id', (req, res) => {
  const product = mockProducts.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.post('/api/products', (req, res) => {
  const newProduct = { ...req.body, id: Date.now().toString() };
  mockProducts.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const index = mockProducts.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    mockProducts[index] = { ...mockProducts[index], ...req.body };
    res.json(mockProducts[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.delete('/api/products/:id', (req, res) => {
  const index = mockProducts.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    mockProducts.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Orders API
app.get('/api/orders', (req, res) => {
  res.json(mockOrders);
});

app.get('/api/orders/:id', (req, res) => {
  const order = mockOrders.find(o => o.id === req.params.id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

app.post('/api/orders', (req, res) => {
  const newOrder = { ...req.body, id: Date.now().toString() };
  mockOrders.push(newOrder);
  res.status(201).json(newOrder);
});

app.put('/api/orders/:id/status', (req, res) => {
  const index = mockOrders.findIndex(o => o.id === req.params.id);
  if (index !== -1) {
    mockOrders[index].status = req.body.status;
    res.json(mockOrders[index]);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

// Auth API (simple demo)
app.post('/api/login', (req, res) => {
  const { email, password, isAdmin } = req.body;
  // Simple demo auth
  if (email && password) {
    res.json({ success: true, isAdmin: isAdmin || false });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});