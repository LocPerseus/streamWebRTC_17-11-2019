const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use('/', (req, res) => {
    res.render('home');
})
app.listen(port, () => console.log('Server started on port:', port));