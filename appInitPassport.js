const passport = require('passport')

const passportInitLocalStrategy         = () => {
  const PassportStrategy  = require('passport-local').Strategy
  const backEnds_users = require('./backEnds/users')(passportStratLocalBackEnd)
  passport.use(new PassportStrategy( (username,password,done) => backEnds_users.findByUsername(passportStratLocalBackEnd, username, (err=null,user=null)=>done(err?err:null,err?null:((!user||user.password!=password)?false:user))) ))
  passport.serializeUser( (user, cb) => cb(null, user.id) )
  passport.deserializeUser( (id, cb) = >backEnds_users.findById(passportStratLocalBackEnd, id, (err,user) => cb(err?err:null,err?null:user)) )
}

const passportInitGoogleOAuth20Strategy = () => { /* Configure passport Google OAuth2.0 strategy. */
  const PassportStrategy = require('passport-google-oauth20').OAuth2Strategy
  passport.use(new GoogleStrategy( {clientID:................, clientSecret:......., callbackURL:'https://mzhukov1973.github.io/pass-express/auth/google/callback'}, (accessToken, refreshToken, profile, done) => User.findOrCreate({googleId:profile.id},(err,user)=>done(err,user)) ))
}

const passportInitGoogleStrategy        = () => { /* Configure passport Google (OpenID 2.0) strategy. */
//  const PassportStrategy = require('passport-google')...
//  passport.use()
}

const passportInitTwitterStrategy       = () => { /* Configure passport Twitter strategy. */
//  const PassportStrategy = require('passport-twitter').Strategy
//  passport.use(new PassportStrategy( {consumerKey:...., consumerSecret:....., callbackURL:'https://mzhukov1973.github.io/pass-express/auth/twitter/callback'}, (token, tokenSecret, profile, done) => User.findOrCreate({twitterId:profile.id}, (err,user)=>done(err?err:null,err?null:user)) ))
}

const passportInitAuth0Strategy         = () => { /* Configure passport Auth0 strategy. */
//  const PassportStrategy = require('passport-auth0')...
//  passport.use()
}

const passportInitGitHub2Auth0Strategy         = () => { /* Configure passport GitHub2 strategy. */
//  const PassportStrategy = require('passport-github2')...
//  passport.use()
}


module.exports = (passportStrat='local', passportStratLocalBackEnd='postgres') => {
  switch (passportStrat) {
    case 'local': 
     passportInitLocalStrategy()
     break
    case 'google-oauth20':
     passportInitGoogleOAuth20Strategy()
     break
    case 'google':
     passportInitGoogleStrategy()
     break
    case 'twitter':
     passportInitTwitterStrategy()
     break
    case 'auth0':
     passportInitAuth0Strategy()
     break
    case 'github2':
     passportInitGitHub2Strategy()
     break
    default:
     passportInitLocalStrategy()
     break
  }
  return passport /* export initialised Passport.js instance       */
}
