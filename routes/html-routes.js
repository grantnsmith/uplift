const path = require("path");

// Middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const puppeteer = require("./puppeteer.js");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/charity", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/charity.html"));
  });

  app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // If a user who is not logged in tries to access this route they will be redirected to the login page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/news", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/newsAndEvents.html"));
  });

  app.get("/scrape", (req, res) => {
    puppeteer.then(data => {
      res.json(data);
    });
  });
};
