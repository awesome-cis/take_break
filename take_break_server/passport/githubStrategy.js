const GitHubStrategy = require('passport-github').Strategy;

module.exports = passport =>
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: 'http://localhost:8080/auth/github/callback'
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ githubId: profile.id }, function(err, user) {
          return cb(err, user);
        });
      }
    )
  );
