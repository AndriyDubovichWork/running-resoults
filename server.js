import express from 'express';
import mongoose from 'mongoose';
// import GetData from './BackEnd/getData';

const app = express();

console.log('hello');

app.use(express.json());

const DB_URL = `mongodb+srv://asadad:5t3rp197@cluster0.9xigt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.get('/', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);

  // GetData();
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
