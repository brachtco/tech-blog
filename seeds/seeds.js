const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const commentSeeds = require('./comment-seeds.json');
const postSeeds = require('./post-seeds.json');
const userSeeds = require('./user-seeds.json');

const seedDatabse = async () => {
    await sequelize.sync({ force: true });


const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
});

const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
});

const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

process.exit(0);
};

seedDatabse();