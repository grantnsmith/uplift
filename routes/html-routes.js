// Middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });

  app.get("/charity", (req, res) => {
    res.render("charity");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });

  app.get("/addBusiness", isAuthenticated, (req, res) => {
    res.render("addbusiness");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  // If a user who is not logged in tries to access this route they will be redirected to the login page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
  });

  app.get("/news", (req, res) => {
    res.render("newsAndEvents");
  });
};
