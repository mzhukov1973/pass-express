#!/home/mzhukov/.nvm/current/bin/node

const passportStrat = 'local' //local, google1, google2, twitter
const passportStratLocalBackEnd = 'postgres' //local, postgres (defaults to postgres-js), postgres-js, postgres-native, sqlite3

const getEnvironment = require('universal-dotenv').getEnvironment
const { raw, stringified, webpack } = getEnvironment()

const path                   = require('path')
const express                = require('express')
const favicon                = require('serve-favicon')
const serveStatic            = require('serve-static')
const compression            = require('compression')
const morgan                 = require('morgan')
const bodyParser             = require('body-parser')
const expressSession         = require('express-session')
const connectEnsureLogin     = require('connect-ensure-login')
const cors                   = require('cors')
const backEnds               = require('./backEnds')
//const request  = require('superagent')
//const nocache  = require('superagent-no-cache')          //Prevents caching of *only* this request
//const prefix   = require('superagent-prefix')('/static') //Prefixes *only *this request
//const oauth    = new OAuth(.)
//require('superagent-oauth')(request)
//require('superagent-auth-bearer')(request)
//require('superagent-jsonapify')(request)        or    1. import superagent as request from 'superagent'
//                                                      2. import superagentJsonapify from 'superagent-jsonapify'
//                                                      3. superagentJsonapify(superagent)
//require('superagent-serializer')(request,'camel')
//const Throttle = require('superagent-throttle') or    import Throttle from 'superagent-throttle'
//const throttle = new Throttle({active:true,rate:5,ratePer:10000,concurrent:2}).on('sent',request=>{ ... }).on('received',request=>{ ... }).on('drained',()=>{ ... })
//const jsonp    = require('superagent-jsonp')
//                                                      1. import superagent as request from 'superagent'
//                                                      2. import {beforeSend, beforeStart, end} from 'superagent-global'
//require('superagent-cache')(request)            or    1. import superagent as request from 'superagent'
//                                                      2. import superagentCache from 'superagent-cache'
//                                                      3. superagentCache(superagent)
//const memcachedCache = new require('cache-service-memcached')('127.0.0.1:11211')
//require('superagent-cache')(request,memcachedCache,{cacheWhenEmpty: false, expiration: 900})
//And cache:
//memcachedCache.set('key','value',300)

//const res = await request.post('/api/pet').send({name:'Manny',species:'cat'}).set('X-API-Key','foobar').set('accept','json')                             //superagent
//request.get('/some-url').query({action:'edit',city:'London'}).use(prefix).use(nocache).end((err,res)=>{...Do something...})                              //superagent-no-cache, superagent-prefix
//request.post('http://api.resource.org/users').sign(oauth,token,secret).send({my:'data'}).set('X-My','Header').end(res=>console.log(res.status,res.body)) //superagent-oauth
//request.get('/').bearer('XvWjkh54rs53HmNlKg165DfE').end((err,res)=>{...})                                                                                //superagent-auth-bearer
//req = request.get('/api/videos?include=comments').then(response=>{const body=response.body, video=body.data[0], comments=video.comments;})               //superagent-jsonapify
//request.get('data.json').send().end((err,res)=>console.log(res.firstName+' '+res.lastName))                                                              //superagent-serializer
//request.get('http://placekitten.com/100/100').use(throttle.plugin()).end((err,res)=>{ ... })                                                             //superagent-throttle
//request.get('http://example.com/foo.json').use(jsonp).end((err,res)=>{ ... })                                                                            //superagent-jsonp
//beforeStart(()=>{console.log('global_onBeforeStart')})                                                                                                   //superagent-global
//beforeSend(Request=>{console.log('global_onBeforeSend')})                                                                                                //superagent-global
//end((err,res)=>{console.log('global:', res);return (err)?false:true;})                                                                                   //superagent-global
//request.get('http://baidu.com').end((err,res)=>console.log(res))                                                                                         //superagent-global
//request.get(uri).end((err,response)=>{/*Response is now cached! Subsequent calls to this superagent request will now fetch the cached response.*/})      //superagent-cache

const passportInitLocalStrategy = () => {//Configure passport local strategy.
  PassportStrategy  = require('passport-local').Strategy
  passport.use(new PassportStrategy(
    (username,password,done) => backEnds.users.findByUsername(passportStratLocalBackEnd, username, (err=null,user=null)=>done(err?err:null,err?null:((!user||user.password!=password)?false:user)))
  ))
  passport.serializeUser((user,cb)=>cb(null,user.id))
  passport.deserializeUser((id,cb)=>backEnds.users.findById(passportStratLocalBackEnd, id,(err,user)=>cb(err?err:null,err?null:user)))
}

const passportInitGoogle1Strategy = () => {//Configure passport Google OAuth1.0 strategy.
  PassportStrategy = require('passport-google-oauth').OAuthStrategy
  //passport.use()
}

const passportInitGoogle2Strategy = () => {//Configure passport Google OAuth2.0 strategy.
  PassportStrategy = require('passport-google-oauth').OAuth2Strategy
  passport.use(new GoogleStrategy(
    {clientID:................, clientSecret:......., callbackURL:'https://mzhukov1973.github.io/pass-express/auth/google/callback'},
    (accessToken, refreshToken, profile, done) => User.findOrCreate({googleId:profile.id},(err,user)=>done(err,user))
  ))

}
const passportInitTwitterStrategy = () => {
  PassportStrategy = require('passport-twitter').Strategy
  passport.use(new PassportStrategy(
    {consumerKey:...., consumerSecret:....., callbackURL:'https://mzhukov1973.github.io/pass-express/auth/twitter/callback'},
    (token, tokenSecret, profile, done) => User.findOrCreate({twitterId:profile.id}, (err,user)=>done(err?err:null,err?null:user))
  ))
}


const passport = require('passport')
let PassportStrategy
switch (passportStrat) {
  case 'local': 
   passportInitLocalStrategy()
   break
  case 'google1':
   passportInitGoogle1Strategy()
   break
  case 'google2':
   passportInitGoogle2Strategy()
   break
  case 'twitter':
   passportInitTwitterStrategy()
   break
  default:
   passportInitLocalStrategy()
   break
}

const app = express()

// Configure view engine to render EJS templates:
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(compression())														/* gzip/deflate outgoing responses               */
app.use(bodyParser.urlencoded({extended:true}))											/* parse urlencoded request bodies into req.body */
app.use(expressSession({secret:'keyboard cat', resave:true, saveUninitialized:true}))						/* store session state in browser cookie         */
app.use(passport.initialize())													/* initialise passport.js instance               */
app.use(passport.session())													/* start passport.js session                     */
app.use(favicon(path.join(__dirname,'static/www-root','favicon.ico')))									/* serve-favicon /favicon.ico                    */
app.use(serveStatic(path.join(__dirname,'static/www-root'),    {'index':['index.html','index.htm']}))					/* serve-static  /                               */
app.use(serveStatic(path.join(__dirname,'static/extra-www'),   {'index':false}))							/* serve-static  /                               */
app.use(serveStatic(path.join(__dirname,'static/extra-www-2'), {'index':['index.html','index.htm']}))					/* serve-static  /www2e                          */
app.use(serveStatic(path.join(__dirname,'static/cors-dir'),    {'index':['index.html','index.htm']}))					/* serve-static  /www2e/cors                     */
app.use(cors())															/* simple usage (enable all CORS requests)       */

app.get('/auth/google', passport.authenticate('google',{scope:['https://www.googleapis.com/auth/plus.login']}))
app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect:'/login'}), function(req,res){res.redirect('/')})
app.get('/auth/twitter', passport.authenticate('twitter'))
app.get('/auth/twitter/callback', passport.authenticate('twitter', {failureRedirect:'/login'}), function(req,res){res.redirect('/')})

app.get(  '/www2e/cors',         function (req,res,next) {res.json({msg:'This is CORS, enabled for all origins!'})      })	/* simple usage (enable all CORS requests)       */
//app.get(  '/www2e/cors', cors(), function (req,res,next) {res.json({msg:'This is CORS, enabled for this single route!'})})	/* enable CORS for a single route /www2e/cors    */
app.get(  '/',                                                                                     function(req,res){res.render('home_new',{user:req.user})}    )
app.get(  '/index.html?',                                                                          function(req,res){res.redirect('/')}                         )
app.get(  '/login',                                                                                function(req,res){res.render('login')}                       )
app.post( '/login',   passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}), function(req,res){res.redirect(req.session.returnTo || '/')} )
app.get(  '/logout',                                                                               function(req,res){req.logout();res.redirect('/');}           )
app.get(  '/profile', connectEnsureLogin.ensureLoggedIn(),                                         function(req,res){res.render('profile',{user:req.user})}     )



app.listen(3004,'127.0.0.1')									/* create node.js http server and listen on port 3004 */
