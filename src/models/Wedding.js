const { Model, DataTypes } = require('sequelize');

class Wedding extends Model{
  static init(sequelize){
    super.init({
      user_one: {
        type: DataTypes.INTEGER,
        unique: {
          msg: "Essa pessoa já está cada."
        },
      },
      user_two: {
        type: DataTypes.INTEGER,
        unique: {
          msg: "Essa pessoa já está cada."
        },
      }
    }, {
      sequelize
    })
  }
}

module.exports = Wedding;
