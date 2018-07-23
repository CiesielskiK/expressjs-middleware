const express = require('express');
const app = express();


app.use('/store', function(req, res, next) {
  console.log('Jestem pośrednikiem do /store');
  next();
});

app.get('/store', function(req, res) {
  res.send('To jest sklep');
});

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.listen(3000);
app.use(function(req, res, next) {
  res.status(404).send('Nie mogliśmy spełnić żądania');
});
