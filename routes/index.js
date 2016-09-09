'use strict';

const { Router } = require('express');
const router = Router();
/////////////////////////////////////////


/////////////////////////////////////////
// Route for '/'
router.get('/', (req, res) => {
  //Will render the index file in the views dir
  res.render(`Testing server`);
});
/////////////////////////////////////////


module.exports = router;
