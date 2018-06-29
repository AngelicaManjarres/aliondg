const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

app.listen(3000, () => {
   console.log('Server running...');
});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
   res.render('index');
})
