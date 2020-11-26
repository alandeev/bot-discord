const { Model, DataTypes } = require('sequelize');

class User extends Model{
  static init(sequelize){
    super.init({
      user_id: DataTypes.STRING,
      username: DataTypes.STRING,
      discriminator: DataTypes.STRING,
      avatar: DataTypes.STRING,
      messages: DataTypes.INTEGER,
      commands: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  async addmsg(){
    this.messages += 1;
    await this.save();
  }

  async addcmd(){
    this.commands += 1;
    await this.save();
  }
}

module.exports = User;
