const jwtStrategy = require('passport-jwt').Strategy;
const extractjwt = require('passport-jwt').ExtractJwt;
// const user = require("../models/user");
const user = require("../models/user");
// const key = require("./keys").secret;
const key = require("./keys").secret;
const opts = {
    jwtFromRequest: extractjwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: key
};

module.exports = passport => {
    passport.use(
        new jwtStrategy(opts, (payload, done) => {
            user.findById(payload._id).then(user => {
                if(user) return done(null, user);
                return done(null, false);                
            }).catch(err => {
                console.log(err);
            });
        })
    );
};