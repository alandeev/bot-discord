const { Model, DataTypes } = require('sequelize');
const levels = require('../configs/levels.json');

class User extends Model{
  static init(sequelize){
    super.init({
      user_id: DataTypes.STRING,
      username: DataTypes.STRING,
      discriminator: DataTypes.STRING,
      avatar: DataTypes.STRING,
      messages: DataTypes.INTEGER,
      commands: DataTypes.INTEGER,
      role: DataTypes.INTEGER,
      desc: DataTypes.STRING,
      last_message: DataTypes.STRING
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

  async upRole(){
    if(this.role >= 5) return false;
    if(this.messages < levels[this.role+1].count) return false;

    this.role += 1;
    await this.save();
    return this.role;
  }

  async setDescription(desc){
    this.desc = desc;
    await this.save();
  }

  async addLastMessage(content){
    if(typeof(content) == 'string' && content.length > 0){
      this.last_message = content;
      await this.save();
    }
  }
}

module.exports = User;
