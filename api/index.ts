import express from 'express';

const app = express();

app.use(express.json());

app.get('/1', (req, res) => {
  res.send('route 1');
});

app.get('/2', (req, res) => {
  res.send('route 2');
});

app.get('/3', (req, res) => {
  res.send('route 3');
});

app.get('/4', (req, res) => {
  res.send('route 4');
});

app.get('/5', (req, res) => {
  res.send('route 5');
});

app.get('/6', (req, res) => {
  res.send('route 6');
});

app.get('/7', (req, res) => {
  res.send('route 7');
});

app.get('/8', (req, res) => {
  res.send('route 8');
});

app.get('/9', (req, res) => {
  res.send('route 9');
});

app.get('/10', (req, res) => {
  res.send('route 10');
});

app.get('/11', (req, res) => {
  res.send('route 11');
});

app.get('/12', (req, res) => {
  res.send('route 12');
});

app.get('/13', (req, res) => {
  res.send('route 13');
});

export default app;
