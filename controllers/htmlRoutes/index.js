// Requiring path to so we can use relative routes to our HTML files
const express = require("express");
const { Op } = require("sequelize");
const { Game, Blog, User } = require("../../models");

// Requiring our custom middleware for checking if a user is logged in
const withAuth = require("../../utils/withAuth");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allBlogsData = await Blog.findAll({
      include: [{ all: true, nested: true }],
    });

    const allBlogs = allBlogsData.map((blog) => blog.get({ plain: true }));
    res.render("index", {
      loggedIn: req.session.loggedIn,
      allBlogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const allBlogsData = await Blog.findAll({
      include: [{ all: true, nested: true }],
    });

    const allBlogs = allBlogsData.map((g) => g.get({ plain: true }));

    // const pastGames = games.map((g) => g.date_time >= req.session.currentTime);
    res.render("dashboard", {
      user: req.session.user,
      loggedIn: req.session.loggedIn,
      allBlogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/newblog", withAuth, async (req, res) => {
  try {
    res.render("newblog", {
      user: req.session.user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user already has an account send them to the dashboard page
  if (req.user) {
    res.redirect("/dashboard");
  }
  res.render("login", {
    user: req.session.user,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204);
      res.redirect("/");
    });
  } else {
    res.status(404).end();
  }
});

router.get("/signup", (req, res) => {
  // If the user already has an account send them to the dashboard page
  if (req.user) {
    res.redirect("/dashboard");
  }
  res.render("signup", {
    user: req.session.user,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
