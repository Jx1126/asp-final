const express = require('express');
const app = express();
const port = 3000;
// const session = require('express-session');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'vue');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('homepage');
});

app.listen(port, () => {
  console.log(`FinanceForge now listening on port ${port}`)
})