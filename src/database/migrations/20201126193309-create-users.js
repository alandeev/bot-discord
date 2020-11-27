const { DataTypes } = require('sequelize');
'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      username: DataTypes.STRING,
      discriminator: DataTypes.STRING,
      avatar: DataTypes.STRING,
      desc: DataTypes.STRING,
      messages: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      commands: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      role: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
