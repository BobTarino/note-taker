const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



// parse incoming string or array data w/ Middleware function
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware makes public folder readily available 
app.use(express.static('public'));

// app will use Router when client naviagtes to api & html routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// think of port as "classroom" on college campus
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});