const User = require("./user");
const Blog = require("./blog");

Blog.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Blog,
};
