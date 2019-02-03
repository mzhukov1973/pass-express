## ExpressJSᵦ
###### Version: `0.0.1`
###### License: [MIT](https://github.com/mzhukov1973/pass-express/blob/master/LICENSE)

### Description:
```
Various tests centering around authentication with Passport.js & Express.
```
# 

## Depends on:
 - **Passport.js** (`passport`) <sup>[Site](https://www.passportjs.org)</sup>: *Express/connect authentication middleware.*
    - `passport` <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport), [npm<sup>®</sup>](https://www.npmjs.com/package/passport)</sup>: *Express/connect authentication middleware.*
    - `passport-local` <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-local), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-local), [Site](http://www.passportjs.org/packages/passport-local)</sup>: *Passport.js Local (i.e. username&password) authentication strategy.*
    - `passport-google-oauth20` <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-google-oauth2), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-google-oauth20),  [Site](http://www.passportjs.org/packages/passport-google-oauth20)</sup>: *Passport strategy for authenticating with Google using the OAuth 2.0 API.*
    - `passport-google` <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-google), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-google),  [Site](http://www.passportjs.org/packages/passport-google)</sup>: *Passport strategy for authenticating with Google using OpenID 2.0.*
    - `passport-twitter` <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-twitter), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-twitter), [Site](http://www.passportjs.org/packages/passport-twitter)</sup>: *Passport.js Twitter authentication strategy.*
 - **Express.js** (`express`) <sup>[Site](https://expressjs.com)</sup>: *Fast, unopinionated, minimalist web framework for Node.js.*
    - `express` <sup>[GitHub<sup>®</sup>](https://github.com/expressjs/express), [npm<sup>®</sup>](https://www.npmjs.com/package/express)</sup>: *Fast, unopinionated, minimalist web framework for Node.js.*
    - `express-session` <sup>[GitHub<sup>®</sup>](https://github.com/expressjs/session), [npm<sup>®</sup>](https://www.npmjs.com/package/express-session)</sup>: *Node.js Connect/Express middleware to establish server-based sessions (**development only!**).*
    - `compression` <sup>[GitHub<sup>®</sup>](https://github.com/expressjs/compression), [npm<sup>®</sup>](https://www.npmjs.com/package/compression)</sup>: *Node.js Connect/Express compression middleware.*
    - `cors` <sup>[GitHub<sup>®</sup>](https://github.com/expressjs/cors), [npm<sup>®</sup>](https://www.npmjs.com/package/cors)</sup>: *Node.js Connect/Express middleware that can be used to enable CORS with various options.*
    - `serve-favicon` <sup>[GitHub<sup>®</sup>](https://github.com/expressjs/serve-favicon), [npm<sup>®</sup>](https://www.npmjs.com/package/serve-favicon)</sup>: *Node.js Connect/Express middleware for serving a favicon.*
    - `serve-static` <sup>[GitHub<sup>®</sup>](https://github.com/expressjs/serve-static), [npm<sup>®</sup>](https://www.npmjs.com/package/serve-static)</sup>: *Node.js Connect/Express middleware to serve files from within a given root directory.*
    - `connect-pg-simple` <sup>[GitHub<sup>®</sup>](https://github.com/voxpelli/node-connect-pg-simple), [npm<sup>®</sup>](https://www.npmjs.com/package/connect-pg-simple)</sup>: *A simple, minimal PostgreSQL session store for Express/Connect.*
    - `connect-sqlite3` <sup>[GitHub<sup>®</sup>](https://github.com/rawberg/connect-sqlite3), [npm<sup>®</sup>](https://www.npmjs.com/package/connect-sqlite3)</sup>: *SQLite3 session store for connect and express.*
    - `memorystore` <sup>[GitHub<sup>®</sup>](), [npm<sup>®</sup>](https://www.npmjs.com/package/memorystore)</sup>: *[`express-session`](https://www.npmjs.com/package/express-session) full featured MemoryStore module without leaks!*
    - `connect-ensure-login` <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/connect-ensure-login), [npm<sup>®</sup>](https://www.npmjs.com/package/connect-ensure-login)</sup>: *Login session ensuring middleware for Connect and Express.*
 - `ejs` <sup>[GitHub<sup>®</sup>](https://github.com/mde/ejs), [npm<sup>®</sup>](https://www.npmjs.com/package/ejs), [Site](https://ejs.co)</sup>: *Embedded JavaScript templating.*
 - `better-sqlite3` <sup>[GitHub<sup>®</sup>](https://github.com/JoshuaWise/better-sqlite3), [npm<sup>®</sup>](https://www.npmjs.com/package/better-sqlite3)</sup>: *The fastest and simplest library for SQLite3 in Node.js.*
 - `pg-promise` <sup>[GitHub<sup>®</sup>](https://github.com/vitaly-t/pg-promise), [npm<sup>®</sup>](https://www.npmjs.com/package/pg-promise), [Site](http://vitaly-t.github.io/pg-promise/index.html)</sup>: *Promises/A+ interface for PostgreSQL.*
    - `pg-native` <sup>[GitHub<sup>®</sup>](https://github.com/brianc/node-pg-native), [npm<sup>®</sup>](https://www.npmjs.com/package/pg-native), [Site](https://node-postgres.com)</sup>: *High performance native bindings between Node.js and PostgreSQL via libpq with a simple API.*
    - `bluebird` <sup>[GitHub<sup>®</sup>](https://github.com/petkaantonov/bluebird), [npm<sup>®</sup>](https://www.npmjs.com/package/bluebird), [Site](http://bluebirdjs.com)</sup>: * Bluebird is a full featured promise library with unmatched performance.*
 - `universal-dotenv` <sup>[GitHub<sup>®</sup>](https://github.com/sebastian-software/universal-dotenv), [npm<sup>®</sup>](https://www.npmjs.com/package/universal-dotenv)</sup>: *Robust Environment Configuration for Universal Applications.*
 - `uid-promise` <sup>[GitHub<sup>®</sup>](https://github.com/zeit/uid-promise), [npm<sup>®</sup>](https://www.npmjs.com/package/uid-promise)</sup>: *Generation of a cryptographically secure UID with a 62 character range that can be safely used in URLs.*

## History:
 - <u>**`0.0.1`**</u>
    - Initial commit - first working code.
    - Basic Express app with session (`express-session`), `compression`, `cors`, `serve-favicon`, `serve-static` and `connect-ensure-login` middleware.
    - Environment variables and `.env` files support (via `universal-dotenv`).
    - Support `ejs` as standard templating engine.
    - Functioning `uid-promise`.

## RoadMap:
 - <u>**`0.0.2`**</u>
    - PostgreSQL access (via `pg-promise`&`pg-native`).
    - Passport.js authentication strategies:
        - `passport-local`, i.e. *username/password*. With *Local memory* and *PostgreSQL* & *SQLite3* back-ends.
        - `passport-google-oauth2.0`.
        - `passport-google`.
        - `passport-twitter`.
        - `passport-auth0`.
    - PostgreSQL session store `connect-pg-simple`.
    - `memorystore` - Full featured, production-grade version of the basic `express-session` session in-memory store.
 - <u>**`0.0.3`**</u>
    - SQLite3 access (via `better-sqlite3`).
    - Passport.js authentication strategies:
        - `passport-local`, i.e. *username/password*. With *SQLite3* back-end.
        - `passport-vkontakte`.
        - `passport-odnoklassniki`.
        - `passport-yandex`.
        - `passport-mail`.
    - SQLite3 session store `connect-sqlite3`.
 - <u>**`0.0.4`**</u>
    - Passport.js authentication strategies:
        - `passport-facebook`
        - `passport-instagram`
        - `passport-dropbox-oauth2`
        - `passport-imgur`
        - `passport-yahoo`
 - <u>**`0.0.5`**</u>
    - Passport.js authentication strategies:
        - `passport-oauth2`
        - `passport-openid`
 - <u>**`0.0.6`**</u>
    - Passport.js authentication strategies:
        - `passport-custom`
 - <u>**`0.0.7`**</u>
    - Passport.js authentication strategies:
        - `passport-http-bearer`
        - `passport-cookie`
        - `passport-jwt`
 - <u>**`0.0.8`**</u>
    - Passport.js authentication strategies:
        - `passport-hash`
        - `passport-2fa-totp`
        - `passport-publickey`
 - <u>*`0.0.9+`*</u> *(In no particular order.)*
    - *Passport.js authentication strategies:*
        - *`...`*
    - *...*

## ToDo:
 - **[&#x2713;]<sup><sup><sup>`0.0.2`</sup></sup></sup>**      <del>**pg-async**</del> <sup>[GitHub<sup>®</sup>](https://github.com/langpavel/node-pg-async), [npm<sup>®</sup>](https://www.npmjs.com/package/pg-async), [Site](https://langpavel.github.io/node-pg-async)</sup>: *Tiny but powerful Promise based PostgreSQL client for node.js designed for easy use with ES7 async/await.*.
     - **[&#x2713;]<sup><sup><sup>`0.0.2`</sup></sup></sup>** <del>**pg-native**</del> <sup>[GitHub<sup>®</sup>](https://github.com/brianc/node-pg-native), [npm<sup>®</sup>](https://www.npmjs.com/package/pg-native), [Site](https://node-postgres.com)</sup>: *High performance native bindings between Node.js and PostgreSQL via libpq with a simple API.*
 - **[&#x2713;]<sup><sup><sup>`0.0.2`</sup></sup></sup>**      <del>**passport-local**</del> <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-local), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-local), [Site](http://www.passportjs.org/packages/passport-local)</sup>: *Passport.js Local (i.e. username&password) authentication strategy.*
     - **[&#x2713;]<sup><sup><sup>`0.0.2`</sup></sup></sup>** <del>**Local Memory**</del>: *Using local variables as back-end to store credentials.*
     - **[&#x2713;]<sup><sup><sup>`0.0.2`</sup></sup></sup>** <del>**PostreSQL**</del>:    *Using PostgreSQL as back-end to store credentials.*
 - [&#x2717;]<del><sup><sup><sup>`0.0.2`</sup></sup></sup>      *passport-google-oauth* <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-google-oauth), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-google-oauth), [Site](http://www.passportjs.org/packages/passport-google-oauth)</sup>: *Passport.js Google OAuth1.0a & OAuth2.0 authentication strategy.*</del>
 - **[&#x2713;]<sup><sup><sup>`0.0.2`</sup></sup></sup>**      <del>**passport-google-oauth20**</del> <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-google-oauth2), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-google-oauth20),  [Site](http://www.passportjs.org/packages/passport-google-oauth20)</sup>: *Passport strategy for authenticating with Google using the OAuth 2.0 API.*
 - **[&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.2`</sup></sup></sup>** **passport-google** <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-google), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-google, [Site](http://www.passportjs.org/packages/passport-google))</sup>: *Passport strategy for authenticating with Google using OpenID 2.0.*
 - **[&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.2`</sup></sup></sup>** **passport-twitter** <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-twitter), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-twitter), [Site](http://www.passportjs.org/packages/passport-twitter)</sup>: *Passport.js Twitter authentication strategy.*
 - **[&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.2`</sup></sup></sup>** **passport-github2** <sup>[GitHub<sup>®</sup>](https://github.com/cfsghost/passport-github), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-github2, [Site](http://www.passportjs.org/packages/passport-github2))</sup>: *Passport strategy for authenticating with GitHub using the OAuth 2.0 API.*
 - **[&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.2`</sup></sup></sup>** **passport-auth0** <sup>[GitHub<sup>®</sup>](https://github.com/auth0/passport-auth0), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-auth0, [Site](http://www.passportjs.org/packages/passport-auth0))</sup>: *This is the auth0 authentication strategy for Passport.js.*
 - **[&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.2`</sup></sup></sup>** **connect-pg-simple** <sup>[GitHub<sup>®</sup>](https://github.com/voxpelli/node-connect-pg-simple), [npm<sup>®</sup>](https://www.npmjs.com/package/connect-pg-simple)</sup>: *A simple, minimal PostgreSQL session store for Express/Connect.*
 - **[&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.2`</sup></sup></sup>** **memorystore**  <sup>[GitHub<sup>®</sup>](https://github.com/roccomuso/memorystore), [npm<sup>®</sup>](https://www.npmjs.com/package/memorystore)</sup>: *Full featured, production-grade version of the basic `express-session` session in-memory store.*
<hr>
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.3`</sup></sup></sup> **better-sqlite3** <sup>[GitHub<sup>®</sup>](https://github.com/JoshuaWise/better-sqlite3), [npm<sup>®</sup>](https://www.npmjs.com/package/better-sqlite3)</sup>: *The fastest and simplest library for SQLite3 in Node.js.*.
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.3`</sup></sup></sup> **passport-local**</del> <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-local), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-local), [Site](http://www.passportjs.org/packages/passport-local)</sup>: *Passport.js Local (i.e. username&password) authentication strategy.*
     - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.3`</sup></sup></sup> **SQLite3**:    *Using SQLite3 as back-end to store credentials.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.3`</sup></sup></sup> **passport-vkontakte** <sup>[GitHub<sup>®</sup>](https://github.com/stevebest/passport-vkontakte), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-vkontakte, [Site](http://www.passportjs.org/packages/passport-vkontakte))</sup>: *Passport strategy for authenticating with VK.com using the OAuth 2.0 API.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.3`</sup></sup></sup> **passport-odnoklassniki** <sup>[GitHub<sup>®</sup>](https://github.com/ozon1234/passport-odnoklassniki), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-odnoklassniki, [Site](http://www.passportjs.org/packages/passport-odnoklassniki))</sup>: *Passport strategy for authenticating with Odnoklassniki.ru using the OAuth 2.0 API.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.3`</sup></sup></sup> **passport-yandex** <sup>[GitHub<sup>®</sup>](https://github.com/gurugray/passport-yandex), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-yandex, [Site](http://www.passportjs.org/packages/passport-yandex))</sup>: *Passport strategy for authenticating with Yandex using the OAuth 2.0 API.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.3`</sup></sup></sup> **passport-mail** <sup>[GitHub<sup>®</sup>](https://github.com/sklyukin/passport-mailru), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-mail, [Site](http://www.passportjs.org/packages/passport-mail))</sup>: *Passport strategy for authenticating with Mailru using the OAuth 2.0 API.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.3`</sup></sup></sup> **connect-sqlite3** <sup>[GitHub<sup>®</sup>](https://github.com/rawberg/connect-sqlite3), [npm<sup>®</sup>](https://www.npmjs.com/package/connect-sqlite3)</sup>: *SQLite3 session store for connect and express.*
<hr>
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.4`</sup></sup></sup> **passport-facebook** <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-facebook), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-facebook, [Site](http://www.passportjs.org/packages/passport-facebook))</sup>: *Passport strategy for authenticating with Facebook using the OAuth 2.0 API.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.4`</sup></sup></sup> **passport-instagram** <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-instagram), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-instagram, [Site](http://www.passportjs.org/packages/passport-instagram))</sup>: *Passport strategy for authenticating with Instagram using the OAuth 2.0 API.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.4`</sup></sup></sup> **passport-dropbox-oauth2** <sup>[GitHub<sup>®</sup>](https://github.com/florianheinemann/passport-dropbox-oauth2), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-dropbox-oauth2, [Site](http://www.passportjs.org/packages/passport-dropbox-oauth2))</sup>: *Passport strategy for authenticating with Dropbox using the OAuth 2.0 API.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.4`</sup></sup></sup> **passport-imgur** <sup>[GitHub<sup>®</sup>](https://github.com/mindfreakthemon/passport-imgur), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-imgur, [Site](http://www.passportjs.org/packages/passport-imgur))</sup>: *Passport strategy for authenticating with Imgur using the OAuth 2.0 API.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.4`</sup></sup></sup> **passport-yahoo** <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-yahoo), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-yahoo, [Site](http://www.passportjs.org/packages/passport-yahoo))</sup>: *Passport strategy for authenticating with Yahoo! using OpenID 2.0.*
<hr>
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.5`</sup></sup></sup> **passport-oauth2** <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-oauth2), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-oauth2, [Site](http://www.passportjs.org/packages/passport-oauth2))</sup>: *General-purpose OAuth 2.0 authentication strategy for Passport.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.5`</sup></sup></sup> **passport-openid** <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-openid), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-openid, [Site](http://www.passportjs.org/packages/passport-openid))</sup>: *Passport strategy for authenticating with OpenID.*
<hr>
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.6`</sup></sup></sup> **passport-custom** <sup>[GitHub<sup>®</sup>](https://github.com/mbell8903/passport-custom), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-custom, [Site](http://www.passportjs.org/packages/passport-custom))</sup>: *Passport strategy for authenticating with custom logic.*
<hr>
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.7`</sup></sup></sup> **passport-http-bearer** <sup>[GitHub<sup>®</sup>](https://github.com/jaredhanson/passport-http-bearer), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-http-bearer, [Site](http://www.passportjs.org/packages/passport-http-bearer))</sup>: *HTTP Bearer authentication strategy for Passport.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.7`</sup></sup></sup> **passport-cookie** <sup>[GitHub<sup>®</sup>](https://github.com/rojo2/passport-cookie), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-cookie, [Site](http://www.passportjs.org/packages/passport-cookie))</sup>: *Cookie authentication strategy for Passport.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.7`</sup></sup></sup> **passport-jwt** <sup>[GitHub<sup>®</sup>](https://github.com/themikenicholson/passport-jwt), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-jwt, [Site](http://www.passportjs.org/packages/passport-jwt))</sup>: *A Passport strategy for authenticating with a JSON Web Token.*
<hr>
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.8`</sup></sup></sup> **passport-hash** <sup>[GitHub<sup>®</sup>](https://github.com/yuri-karadzhov/passport-hash), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-hash, [Site](http://www.passportjs.org/packages/passport-hash))</sup>: *Passport strategy for authenticating with a hash parameter provided by link.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.8`</sup></sup></sup> **passport-2fa-totp** <sup>[GitHub<sup>®</sup>](https://github.com/ilich/passport-2fa-totp), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-2fa-totp, [Site](http://www.passportjs.org/packages/passport-2fa-totp))</sup>: *Passport strategy for Two-factor authenticating with a username, password and TOTP code.*
 - [&nbsp;&nbsp;&nbsp;]<sup><sup><sup>`0.0.8`</sup></sup></sup> **passport-publickey** <sup>[GitHub<sup>®</sup>](https://github.com/timfpark/passport-publickey), [npm<sup>®</sup>](https://www.npmjs.com/package/passport-publickey, [Site](http://www.passportjs.org/packages/passport-publickey))</sup>: *Passport strategy for authenticating using a public/private key pair to sign a nonce challenge.*
<hr>
 - [&nbsp;&nbsp;&nbsp;]*<sup><sup><sup>`0.0.9+`</sup></sup></sup>* **...** <sup>[GitHub<sup>®</sup>](...), [npm<sup>®</sup>](https://www.npmjs.com/package/..., [Site](...))</sup>: *...*





