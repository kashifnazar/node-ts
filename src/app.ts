import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello test');
});

app.listen(port, 'localhost', () => {
  console.log(`Listening to port ${port} on localhost`);
});
