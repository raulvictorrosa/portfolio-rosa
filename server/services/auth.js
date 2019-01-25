const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: "https://raulvictorrosa.auth0.com/.well-known/jwks.json"
  }),

  audience: "mnTg7fHPDymU2fMuujkaBavVg1lOmg7k",
  issuer: "https://raulvictorrosa.auth0.com/",
  algorithms: ["RS256"]
});
