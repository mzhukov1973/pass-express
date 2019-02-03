const passportStrat             = 'local'    /* localᵈᵉᶠ, google, google-oauth20, twitter, auth0                                                                                                                                                                                                                 */
const passportStratLocalBackEnd = 'postgres' /* local, postgresᵈᵉᶠ (defaults to postgres-js), postgres-js, postgres-native, sqlite3                                                                                                                                                                              */
const sessionStore              = 'express'  /* expressᵈᵉᶠ, connect-pg-simple, connect-sqlite3, memorystore (In case of connect-pg-simple, the precise back-end used is defined by passportStratLocalBackEnd if (it's set to 'postgres', 'postgres-js' or 'postgres-native') or is set to 'postgres' otherwise.) */

const getEnvironment = require('universal-dotenv').getEnvironment
const { raw, stringified, webpack } = getEnvironment()

const path                   = require('path')
const express                = require('express')
const favicon                = require('serve-favicon')
const serveStatic            = require('serve-static')
const compression            = require('compression')
const morgan                 = require('morgan')
const bodyParser             = require('body-parser')
const connectEnsureLogin     = require('connect-ensure-login')
const cors                   = require('cors')
const uid                    = require('uid-safe')
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

/* N.B.: Since base64 encoding is used, 24 requested bytes translate to string of (24*8/6=)32 characters. (May contain '-' and '_'.) */
const aau = async () => {
  const uuid_strAsync = await uid(24) 
  console.log("'uid-safe'-generated (generally speaking, asyncronously) cryptographically secure random string of 32 characters, with '=', '+' and '/' replaced with '', '-' and '_' respectively:\n'%o'", uuid_strAsync)
}
aau()
const uuid_strSync = uid.sync(24)
console.log("'uid-safe'-generated (syncronously) cryptographically secure random string of 32 characters, with '=', '+' and '/' replaced with '', '-' and '_' respectively:\n'%s'", uuid_strSync)


const app = express()


app.set('views', __dirname + '/views')									/* configure view engine to render EJS templates */
app.set('view engine', 'ejs')										/* configure view engine to render EJS templates */
app.use(compression())											/* gzip/deflate outgoing responses               */
app.use(bodyParser.urlencoded({extended:true}))								/* parse urlencoded request bodies into req.body */
const session = require('./appInitSessions')(sessionStore, passportStratLocalBackEnd)			/* initialise session support                    */
app.use(session)											/* store session state in browser cookie         */
const passport = require('./appInitPassport')(passportStrat, passportStratLocalBackEnd)			/* initialise passport.js                        */
app.use(passport.initialize())										/* initialise passport.js instance               */
app.use(passport.session())										/* start passport.js session                     */
app.use(favicon( path.join(__dirname,'static/www-root','favicon.ico') ))				/* serve-favicon /favicon.ico                    */
app.use(serveStatic( path.join(__dirname,'static/www-root'),    {'index':['index.html','index.htm']} ))	/* serve-static  /                               */
app.use(serveStatic( path.join(__dirname,'static/extra-www'),   {'index':false}                      ))	/* serve-static  /                               */
app.use(serveStatic( path.join(__dirname,'static/extra-www-2'), {'index':['index.html','index.htm']} ))	/* serve-static  /www2e                          */
app.use(serveStatic( path.join(__dirname,'static/cors-dir'),    {'index':['index.html','index.htm']} ))	/* serve-static  /www2e/cors                     */
app.use(cors())												/* simple usage (enable all CORS requests)       */
app.get(  '/',                                                                                     function(req,res){res.render('home',{user:req.user})}                                     )
app.get(  '/index.html?',                                                                          function(req,res){res.redirect('/')}                                                      )
app.get(  '/login',                                                                                function(req,res){res.render('login')}                                                    )
app.get(  '/logout',                                                                               function(req,res){req.logout();res.redirect('/');}                                        )
app.get(  '/profile', connectEnsureLogin.ensureLoggedIn(),                                         function(req,res){res.render('profile',{user:req.user})}                                  )
app.post( '/login',   passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}), function(req,res){res.redirect(req.session.returnTo || '/')}                              )	/* Passport.js strategies, implemented */
//app.get(  '/auth/google-oauth20', passport.authenticate('google',{scope:['https://www.googleapis.com/auth/plus.login']})                                                                     )	/* Passport.js strategies, implemented */
//app.get(  '/auth/google-oauth20/callback', passport.authenticate('google', {failureRedirect:'/login'}), function(req,res){res.redirect(req.session.returnTo || '/')}                         )	/* Passport.js strategies, implemented */
app.get(  '/auth/google-oauth20',                                                                  function(req,res){res.render('auth-google')}                                              )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/auth/google-oauth20/callback',                                                         function(req,res){res.redirect('/auth/google')}                                           )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/auth/google',                                                                          function(req,res){res.render('auth-google')}                                              )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/auth/google/callback',                                                                 function(req,res){res.redirect('/auth/google')}                                           )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/auth/twitter',                                                                         function(req,res){res.render('auth-twitter')}                                             )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/auth/twitter/callback',                                                                function(req,res){res.redirect('/auth/twitter')}                                          )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/auth/auth0',                                                                           function(req,res){res.render('auth-auth0')}                                               )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/auth/auth0/callback',                                                                  function(req,res){res.redirect('/auth/auth0')}                                            )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/auth/github2',                                                                         function(req,res){res.render('auth-github2')}                                             )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/auth/github2/callback',                                                                function(req,res){res.redirect('/auth/github2')}                                          )	/* Passport.js strategies, placeholders/stubs */
app.get(  '/www2e/cors',                                                                           function (req,res,next) {res.json({msg:'This is CORS, enabled for all origins!'})}        )	/* simple usage (enable all CORS requests)       */
//app.get(  '/www2e/cors', cors(),                                                                   function (req,res,next) {res.json({msg:'This is CORS, enabled for this single route!'})}  )	/* enable CORS for a single route /www2e/cors    */


app.listen(3004,'127.0.0.1')										/* create node.js http server and listen on port 3004 */
