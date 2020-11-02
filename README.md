# portifolio-rosa

### 1. Run `yarn install` to install all of the dependencies

### 2. in main folder create `env.development.local` file so you have `./env.development.local` and specify following:

```
DB_URI=YOU_MONGO_ATLAS_DB_URI # Get from https://www.mongodb.com/cloud/atlas
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_AUTH0_CLIENT_SECRET
AUTH0_REDIRECT_URI=YOUR_AUTH0_REDIRECT_URI
AUTH0_POST_LOGOUT_REDIRECT_URI=YOUR_AUTH0_POST_LOGOUT_REDIRECT_URI
AUTH0_COOKIE_SECRET=YOUR_AUTH0_COOKIE_SECRET
AUTH0_NAMESPACE=YOUR_AUTH0_NAMESPACE # Get from https://auth0.com/

```

### 3. run `yarn dev`
