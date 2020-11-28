const User = require('../models/User');

class userController {
  async createUser({ id: user_id, username, discriminator, avatar }){
    try{
      return await User.create({ user_id, username, discriminator, avatar, messages: 0, commands: 0, role: 0, desc: '', last_message: ''});
    }catch(err){
      return false;
    }
  }

  findUser(user_id){
    return User.findOne({
      where: { user_id }
    })
  }

  getUsersRankMessages(){
    return User.findAll({
      order: [
        ['messages', 'DESC']
      ]
    })
  }
}

module.exports = new userController();
