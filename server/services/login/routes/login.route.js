const loginRouter = require('express').Router()
const passport = require('passport')
require('../utils/auth')


loginRouter.post('/', async (req, res) => {
    await logUser(req, res)
})



loginRouter.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

loginRouter.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


module.exports = loginRouter