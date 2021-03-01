const fs = require("fs");
module.exports = {
  development: {
    app: {
      name: "Passport SAML strategy example",
      port: process.env.PORT || 5000,
    },
    passport: {
      strategy: "saml",
      saml: {
        path: "https://example.com:5000/login/callback",
        entryPoint: "https://login.microsoftonline.com/tenantid/saml2",
        issuer: "ISSUERNAME",
        // cert: fs.readFileSync("cert", "utf-8")
      },
    },
  },
};
