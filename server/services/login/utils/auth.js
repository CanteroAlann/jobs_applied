
const passport = require('passport');
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
require('dotenv').config()


console.log(process.env.GOOGLE_CLIENT_ID)

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8002/login/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
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
