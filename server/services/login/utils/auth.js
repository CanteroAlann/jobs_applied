
const passport = require('passport');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
require('dotenv').config()
const User = require('../models/user')




passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8002/auth/google/callback"
  },
  function(req,accessToken, refreshToken, profile, cb) {
    User.findOrCreate({name: profile.displayName }, function (err, user) {
      req.user = user;
      return cb(err, user);
    });
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  }
);

passport.deserializeUser(function(obj, done) {
    done(null, obj);
  }
);