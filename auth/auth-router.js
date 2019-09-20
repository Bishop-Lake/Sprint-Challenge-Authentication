const router = require('express').Router();

const Users = require('./auth-model')
const bcrypt = require('bcryptjs')

router.post('/register', (req, res) => {
  let user = req.body
  
  if (!user.username || !user.password) {
    res.status(401).json({Message: "Please provide both a username and a password"})
  } else {
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash

    Users.add(user)
      .then(user => {
        res.status(201).json(req.body)
      })
      .catch(error => {
        res.status(500).json({Error: 'there was an issue createing the user account in the database'})
      })
  }
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
