//use express for building API endpoints to accept requests and send back a response
const express = require('express');
//use heroku's default port or port 3001 
const PORT = process.env.PORT || 3001;
//instantiate the server
const app = express();
//use routes 
const apiRoutes = require ('./routes/apiRoutes');
//const htmlRoutes = require ('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);


//add listen method to make our server listen for requests
app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
  });