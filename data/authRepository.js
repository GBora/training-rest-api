const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'it-shop.db',
});
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
});

const getTokens = async () => {
    const list = ['af202098-c6a1-4924-9187-1eddd07e0338', 'abd1685b-c4d5-406d-993e-7c4f9b35daf7', 'c5f8780d-dcaa-45e4-a565-439ae79a6ef7'];

    return list;
}

const signupUser = async (username, password) => {
    await User.sync();
    await User.create({
        username: username,
        password: password,
    });
}

const getUsers = async () => {
    await User.sync();
    const users = await User.findAll();
    const result = users.map( user => { 
        return {
            username: user.username, 
            password: user.password
        }
     })
    return result;
}

module.exports = {
    getTokens,
    getUsers,
    signupUser
}