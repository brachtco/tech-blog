const { Model, DataTypes } = require('sequelize');
const bcrpyt = require('bcrypt');
const sequelize = require('../config/conneciton');

class User extends Model {
    checkPassword(loginPW) {
        return bcrpyt.compareSync(loginPW, this.password);
    }
}

User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name:  {
          type: DataTypes.STRING,
          allowNull: false,
    },
    email: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        len: [8],
    },
},
{
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrpyt.hash(newUserData.password, 10);
            return newUserData;
        },
    },
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
}

);