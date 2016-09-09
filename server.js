'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/');


/////////////////////////////////////////


/////////////////////////////////////////
//Middle-ware
const port = process.env.PORT || 3000;
app.set('port', port);
//Set the view engine to pug
app.set('view engine', 'pug');
//Allow to set to production env to make it 'prettified'
if ( process.env.NODE_ENV === 'production' ) {
  app.locals.pretty = true;
}
//Serve up a static index.html file here
app.use(express.static('public'));

//This listens for form data, and then parses the form data into a readable obj
app.use(bodyParser.urlencoded({extended: false}));
/////////////////////////////////////////


/////////////////////////////////////////
// Routes

//Use the routes moudule
app.use(routes);
/////////////////////////////////////////


/////////////////////////////////////////
//Server listening on port 3000
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/////////////////////////////////////////
