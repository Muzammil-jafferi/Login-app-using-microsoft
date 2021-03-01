const SamlStrategy = require("passport-saml").Strategy;

module.exports = function (passport, config) {
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(
    new SamlStrategy(
      {
        callbackUrl: config.passport.saml.path,
        entryPoint: config.passport.saml.entryPoint,
        issuer: config.passport.saml.issuer,
        //cert: config.passport.saml.cert
      },
      function (profile, done) {
        console.log("profile ---->", profile);
        return done(null, {
          email:
            profile[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
            ],
          displayName:
            profile["http://schemas.microsoft.com/identity/claims/displayname"],
          firstName:
            profile[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"
            ],
          lastName:
            profile[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"
            ],
        });
      }
    )
  );
};
