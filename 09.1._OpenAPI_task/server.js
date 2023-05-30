const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('openapi.yaml');

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const books = [];

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

app.get('/books/:id', (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === parseInt(id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find((book) => book.id === parseInt(id));
  if (book) {
    book.title = title;
    book.author = author;
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((book) => book.id === parseInt(id));
  if (index !== -1) {
    books.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
