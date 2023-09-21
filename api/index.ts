import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/', (req, res) => {
  res.send('accueil');
});

app.get('/api/1', (req, res) => {
  res.send('route 1');
});

app.get('/api/2', (req, res) => {
  res.send('route 2');
});

app.get('/api/3', (req, res) => {
  res.send('route 3');
});

app.get('/api/4', (req, res) => {
  res.send('route 4');
});

app.get('/api/5', (req, res) => {
  res.send('route 5');
});

app.get('/api/6', (req, res) => {
  res.send('route 6');
});

app.get('/api/7', (req, res) => {
  res.send('route 7');
});

app.get('/api/8', (req, res) => {
  res.send('route 8');
});

app.get('/api/9', (req, res) => {
  res.send('route 9');
});

app.get('/api/10', (req, res) => {
  res.send('route 10');
});

app.get('/api/11', (req, res) => {
  res.send('route 11');
});

app.get('/api/12', (req, res) => {
  res.send('route 12');
});

app.get('/api/13', (req, res) => {
  res.send('route 13');
});

export default app;
