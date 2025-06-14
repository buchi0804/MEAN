const express = require('express');
const Sale = require('./models.sale');
const Category = require('./models.category');
const Customer = require('./models.customer');

const router = express.Router();

// Sales CRUD
router.get('/sales', async (req, res) => {
  const sales = await Sale.find();
  res.json(sales);
});

router.post('/sales', async (req, res) => {
  const sale = new Sale(req.body);
  await sale.save();
  res.status(201).json(sale);
});

// Categories CRUD
router.get('/categories', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.post('/categories', async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.status(201).json(category);
});

// Customers CRUD
router.get('/customers', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

router.post('/customers', async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.status(201).json(customer);
});

module.exports = router;
