const { DataTypes } = require('sequelize');

'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('weddings', {
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true
       },
       user_one: {
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        unique: true
       },
       user_two: {
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        unique: true
       },
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('weddings');
  }
};
