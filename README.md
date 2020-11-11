# portfolio-rosa

### 1. Run `yarn install` to install all of the dependencies

### 2. in main folder create `env.development.local` file so you have `./env.development.local` and specify following:

```
DB_URI=YOU_MONGO_ATLAS_DB_URI # Get from https://www.mongodb.com/cloud/atlas
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_AUTH0_CLIENT_SECRET
AUTH0_REDIRECT_URI=YOUR_AUTH0_REDIRECT_URI // http://localhost:3000/api/v1/callback
AUTH0_POST_LOGOUT_REDIRECT_URI=YOUR_AUTH0_POST_LOGOUT_REDIRECT_URI // http://localhost:3000/
AUTH0_COOKIE_SECRET=SOME_UNIQUE_STRING // e.g. asd7ad9879d8a7d89adkabsdhjbasbdas98as7d>?{sd9a87dd8a7d9adad7a8d}
AUTH0_NAMESPACE=YOUR_AUTH0_NAMESPACE // Get from https://auth0.com/

PORTFOLIO_API_URL=http://localhost:3001/api/v1

```

### 3. run `yarn dev`
