const mongoose = require('mongoose');
const Category = require('./models.category');
const Customer = require('./models.customer');
const Sale = require('./models.sale');

async function seedData() {
  await Category.deleteMany({});
  await Customer.deleteMany({});
  await Sale.deleteMany({});

  const categories = await Category.insertMany([
    { name: 'Smartphones' },
    { name: 'Laptops' },
    { name: 'Audio' }
  ]);

  const customers = await Customer.insertMany([
    { name: 'John Doe', region: 'North America' },
    { name: 'Jane Smith', region: 'Europe' },
    { name: 'Bob Wilson', region: 'North America' },
    { name: 'Alice Brown', region: 'Asia' }
  ]);

  await Sale.insertMany([
    {
      product: 'iPhone 15', category: 'Smartphones', customer: 'John Doe', region: 'North America', quantity: 5, amount: 4995, date: new Date('2024-12-01')
    },
    {
      product: 'Samsung Galaxy S24', category: 'Smartphones', customer: 'Jane Smith', region: 'Europe', quantity: 3, amount: 2697, date: new Date('2024-12-02')
    },
    {
      product: 'MacBook Pro', category: 'Laptops', customer: 'Bob Wilson', region: 'North America', quantity: 2, amount: 4798, date: new Date('2024-12-03')
    },
    {
      product: 'AirPods Pro', category: 'Audio', customer: 'Alice Brown', region: 'Asia', quantity: 10, amount: 2490, date: new Date('2024-12-04')
    },
    {
      product: 'Dell XPS 13', category: 'Laptops', customer: 'Jane Smith', region: 'Europe', quantity: 1, amount: 1299, date: new Date('2024-12-05')
    },
    {
      product: 'Sony WH-1000XM5', category: 'Audio', customer: 'John Doe', region: 'North America', quantity: 2, amount: 798, date: new Date('2024-12-06')
    },
    {
      product: 'Google Pixel 8', category: 'Smartphones', customer: 'Alice Brown', region: 'Asia', quantity: 4, amount: 2796, date: new Date('2024-12-07')
    },
    {
      product: 'HP Spectre x360', category: 'Laptops', customer: 'Bob Wilson', region: 'North America', quantity: 1, amount: 1599, date: new Date('2024-12-08')
    },
    {
      product: 'Bose QuietComfort Earbuds', category: 'Audio', customer: 'Jane Smith', region: 'Europe', quantity: 3, amount: 849, date: new Date('2024-12-09')
    },
    {
      product: 'OnePlus 12', category: 'Smartphones', customer: 'Bob Wilson', region: 'North America', quantity: 2, amount: 1398, date: new Date('2024-12-10')
    }
  ]);

  console.log('Database seeded!');
  process.exit();
}

mongoose.connect('mongodb+srv://sai143819:9rhHgbJ5rcQmKkYx@cluster0.xidprcf.mongodb.net/electronics_dashboard?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(seedData);
