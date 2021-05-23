const { hash } = require('bcryptjs');

const User = require('../models/User');

const getUserByPk = async id => {
  if (id <= 0) {
    throw {
      status: 400,
      message: 'identificador inválido',
    };
  }

  const [foundUser] = await User.findByPk(id);
  if (!foundUser) {
    throw {
      status: 404,
      message: 'Usuário não encontrado',
    };
  }

  return { user: foundUser };
}

module.exports = {
  getUserByPk,

  async storeUser(user) {
    const {
      name,
      username,
      password,
      segment_id,
      events_notification,
      public_bids_notification,
    } = user;

    if (!name || !username || !password) {
      throw  {
        status: 400,
        message: 'Os campos "name", "username" e "password" são obrigatórios',
      };
    }
  
    const [userExist] = await User.findOne({ username });
    if (userExist) {
      throw {
        status: 400,
        message: 'username já existe'
      };
    }

    const data = {
      name,
      username,
      password: await hash(password, 8),
      is_poster: 0,
      segment_id,
      events_notification,
      public_bids_notification,
    };

    const [id] = await User.create(data);
    const { user: createdUser } = await getUserByPk(id);

    return { user: createdUser };
  },

  async editUser(id, user) {
    const {      
      name,
      password,
      segment_id,
      events_notification,
      public_bids_notification,
    } = user;
  
    try {
      const { user } = await getUserByPk(id);
      const passwordHashed = await hash(password, 8);

      const data = {
        name: name ?? user.name,
        password: password ? passwordHashed : user.password,
        segment_id: segment_id ?? user.segment_id,
        events_notification: events_notification ?? user.events_notification,
        public_bids_notification: public_bids_notification ?? user.public_bids_notification,
      };

      const updatedId = await User.update(user.id, data);
      const { user: updatedUser } = await getUserByPk(updatedId);

      return { user: updatedUser };
    } catch (err) {
      throw err;
    }
  },

  async destroyUser(id) {
    try {
      await getUserByPk(id);

      await User.destroy(id);
    } catch (err) {
      throw err;
    }
  },
};
