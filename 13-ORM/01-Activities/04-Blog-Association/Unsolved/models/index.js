const Post = require('./post');
const Author = require('./author');

// Create a relationship that instructs Posts to belong to Authors
Post.belongsTo(Author);

// Create a relationship that instructs Authors that it has many Posts
Author.hasMany(Post);

module.exports = { Post, Author };


