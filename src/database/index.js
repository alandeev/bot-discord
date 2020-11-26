const { Sequelize } = require('sequelize');

const User = require('../models/User');

const dbConfig = require('../configs/database');

// eslint-disable-next-line
const connection = new Sequelize(dbConfig);

User.init(connection);
