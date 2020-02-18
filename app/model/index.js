const { Sequelize, DataTypes } = require('sequelize');
const usersModel = require('./users');
const config = require('../config/db');

// const sequelize = new Sequelize({ ...config, dialect: 'postgres' });

const sequelize = new Sequelize('postgres://jknbbdgabchspz:90711f60be1e800b30fff96a2e2210519b81e9cc3b8b2611de739e8475ee4802@ec2-54-246-90-10.eu-west-1.compute.amazonaws.com:5432/d9c52mjskqu60h');

const db = {
  sequelize,
  users: usersModel(sequelize, DataTypes),
};

module.exports = db;
