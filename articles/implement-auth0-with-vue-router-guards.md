# Implement Auth0 with Vue router guards

After reading some of the tutorials on how to implement Auth0 in your Vue app,
I felt like it could be done in a simpler manner.

I'm a big fan of using your router implementation to it's fullest. I see routes
as the skeleton of your application. I have mostly enjoyed using Vue router and
think it's great for implementing your Auth0 login use cases.

## Instantiate Auth0-js

We'll create a new module named `./auth0.js` that exports and instance of the
`WebAuth` constructor. We'll also wrap some methods and add a new one. We are
building only what we **need**.

```js
import {WebAuth} from 'auth0-js'
import sum from 'hash-sum'

const auth0Config = {
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.VUE_APP_AUTH0_REDIRECT_URI,
  responseType: process.env.VUE_APP_AUTH0_RESPONSE_TYPE,
  scope: process.env.VUE_APP_AUTH0_SCOPE,
  audience: process.env.VUE_APP_AUTH0_AUDIENCE
};

const auth0AccessTokenStorageKey = `${sum(auth0Config)}-access-token`
const auth0 = new WebAuth(auth0Config)

auth0.accessToken = value => value
  ? localStorage.setItem(auth0AccessTokenStorageKey, value)
  : localStorage.getItem(auth0AccessTokenStorageKey)

const authorize = auth0.authorize

auth0.authorize = function(...args) {
  localStorage.removeItem(auth0AccessTokenStorageKey)
  authorize.call(this, ...args)
}

export default auth0
```

We are adding the `accessToken` method for storing the accessToken to
localStorage. You could make things a bit more fancy and wrap the parseHash
method for storing the accessToken on the localStorage. I'm doing that in my
Vue router `guard`.

## Setting up the routes

The next step is to define a Vue router guard.

```js
  // ...

  const unregisterLoginGuard = router.beforeEach((to, from, next) => {
    if (!to.meta.authenticated)
      return next()

    auth0.parseHash((error, result) => {
      if (auth0.accessToken())
        return next()

      if (error || isNil(result)) {
        localStorage.setItem('redirect', to.fullPath)
        return auth0.authorize()
      }

      const {accessToken} = result

      auth0.accessToken(accessToken)
      unregisterLoginGuard()
      next({
        name: 'redirect'
      })
    })
  })

  // ...
```

Notice that I unregister the guard once the token has been parsed and stored in
localStorage.

> You might notice some redirect logic here and there. In my project I have
> defined a `/redirect` route for jumping to the route after login was a success.
> Let me know if you want me to elaborate on my redirection strategy.

Furthermore we define a login route which will serve as a logout also. The
authorize method will delete the accessToken from localStorage and call the
original `auth0.authorize()`.

```js
  // ./router.js

  // ...

  {
    name: 'login',
    path: '/login',
    meta: {
      authenticated: true,
    },
    beforeEnter: () => {
      auth0.authorize()
    }
  },

  // ...
```

That's it.
