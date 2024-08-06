const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require("./models/person");

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await Person.findOne({ username: username });
      
      if (!user) {
        return done(null, false, { message: 'Invalid username' });
      }
  
      // Compare password securely (replace with bcrypt comparison in production)
      const isPasswordMatch = await user.comparePassword(password);
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid password' });
      }
    } catch (error) {
      return done(error); // Fix: change `err` to `error`
    }
  }));


  module.exports = passport;
