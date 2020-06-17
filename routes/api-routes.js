const db = require("../models");
const passport = require("../config/passport");
require("dotenv").config();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NewsAPI_Key);
const puppeteer = require("../util/scraper.js");
const axios = require("axios");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // GET route for showing all businesses
  app.get("/api/businesses", (req, res) => {
    db.Business.findAll({}).then(result => {
      res.json(result);
    });
  });

  //GET route for retrieving all businesses based on category
  app.get("/api/businesses/:category", (req, res) => {
    db.Business.findAll({
      where: {
        CategoryID: req.params.category
      },
      include: [db.Category]
    }).then(result => {
      const businessArray = [];
      for (let i = 0; i < result.length; i++) {
        const addBusiness = {
          name: result[i].dataValues.name,
          city: result[i].dataValues.city,
          phone: result[i].dataValues.phone,
          website: result[i].dataValues.website,
          address: result[i].dataValues.address,
          twitter: result[i].dataValues.twitter,
          instagram: result[i].dataValues.instagram,
          facebook: result[i].dataValues.facebook,
          imageURL: result[i].dataValues.Category.imageURL
        };
        businessArray.push(addBusiness);
      }
      const businessObject = {
        business: businessArray
      };
      res.render("index", businessObject);
    });
  });

  //GET route for retreiving all business based on city
  app.get("/api/city/:city", (req, res) => {
    db.Business.findAll({
      where: {
        city: req.params.city
      },
      include: [db.Category]
    }).then(result => {
      const businessArray = [];
      for (let i = 0; i < result.length; i++) {
        const addBusiness = {
          name: result[i].dataValues.name,
          city: result[i].dataValues.city,
          phone: result[i].dataValues.phone,
          website: result[i].dataValues.website,
          address: result[i].dataValues.address,
          twitter: result[i].dataValues.twitter,
          instagram: result[i].dataValues.instagram,
          facebook: result[i].dataValues.facebook,
          imageURL: result[i].dataValues.Category.imageURL
        };
        businessArray.push(addBusiness);
      }
      const businessObject = {
        business: businessArray
      };
      res.render("index", businessObject);
    });
  });

  //GET route for retreiving all business based on city and category
  app.get("/api/cityandcategory/:city/:category", (req, res) => {
    db.Business.findAll({
      where: {
        city: req.params.city,
        CategoryID: req.params.category
      },
      include: [db.Category]
    }).then(result => {
      const businessArray = [];
      for (let i = 0; i < result.length; i++) {
        const addBusiness = {
          name: result[i].dataValues.name,
          city: result[i].dataValues.city,
          phone: result[i].dataValues.phone,
          website: result[i].dataValues.website,
          address: result[i].dataValues.address,
          twitter: result[i].dataValues.twitter,
          instagram: result[i].dataValues.instagram,
          facebook: result[i].dataValues.facebook,
          imageURL: result[i].dataValues.Category.imageURL
        };
        businessArray.push(addBusiness);
      }
      const businessObject = {
        business: businessArray
      };
      res.render("index", businessObject);
    });
  });

  //POST route for saving a new business to the businesses table
  app.post("/api/newBusiness", (req, res) => {
    db.Business.create(req.body).then(result => {
      res.json(result);
    });
  });

  //GET route for querying the NewsAPI package for articles
  app.get("/api/news/:sort", (req, res) => {
    newsapi.v2
      .everything({
        q: "blm",
        sortBy: req.params.sort,
        language: "en"
      })
      .then(response => {
        res.json(response);
      });
  });

  // Uses puppeteer utility function scrape Eventbrite events based off today, week, or month selection
  app.get("/scrape/", (req, res) => {
    puppeteer.then(data => {
      res.json(data);
    });
  });

  // Finds businesses created by the user session identified by their email login
  app.get("/api/member/:email", (req, res) => {
    db.Business.findAll({
      where: {
        createdBy: req.params.email
      }
    }).then(result => {
      const businessArray = [];
      for (let i = 0; i < result.length; i++) {
        const addBusiness = {
          name: result[i].dataValues.name,
          city: result[i].dataValues.city,
          phone: result[i].dataValues.phone,
          website: result[i].dataValues.website,
          address: result[i].dataValues.address,
          twitter: result[i].dataValues.twitter,
          instagram: result[i].dataValues.instagram,
          facebook: result[i].dataValues.facebook
        };
        businessArray.push(addBusiness);
      }
      const businessObject = {
        business: businessArray
      };
      res.json(businessObject);
    });
  });

  // Queries charityapi.orghunter.com API and returns response in JSON
  app.get("/api/charities", (req, res) => {
    const config = {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    };
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=${process.env.CharityAPI_Key}&category=R&searchTerm=african%20american`,
        config
      )
      .then(response => {
        res.json(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  });
};
