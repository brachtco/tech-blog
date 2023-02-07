const { Model, DataTypes} = require('sequelize');
const bcrpyt = require('bcrypt');
const sequelize = require('../config/connection');


Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        title: { 
            type: DataTypes.STRING,
            allowNull: false,
    },
        post_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTable: true,
        underscored: true,
        modelName: 'post'
    }

);

module.exports = Post;