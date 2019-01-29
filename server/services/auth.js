const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const namespace = "http://localhost:3000/";

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

exports.checkRole = role => (req, res, next) => {
  const { user } = req;

  if (user && user[`${namespace}role`] === role) {
    next();
  } else {
    return res.status(401).send({
      title: "Not Authorized",
      detail: "You are not authorized to access this data."
    });
  }
};
