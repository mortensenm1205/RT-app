var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  const greeting = {
    hello: 'Welcome to the Users page!',
    goodbye: 'See you later!'
  }
  res.send(greeting);
});

module.exports = router;
