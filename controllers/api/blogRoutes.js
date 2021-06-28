/* eslint-disable no-unused-vars */
// Requiring our models and passport as we've configured it
const router = require("express").Router();
const { User, Blog } = require("../../models");
const withAuth = require("../../utils/withAuth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateBlog = await Blog.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(updateBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
