const Event = require('../models/Event');

const getEventByPk = async id => {
  if (id <= 0) {
    throw {
      status: 400,
      message: 'identificador inválido',
    };
  }

  const [foundEvent] = await Event.findByPk(id);
  if (!foundEvent) {
    throw {
      status: 404,
      message: 'Evento não encontrado',
    };
  }

  return { event: foundEvent };
}

module.exports = {
  getEventByPk,

  async listEvent(where = {}) {
    const events = await Event.findAll(where);

    return { events };
  },

  async storeEvent(event) {
    const { title, description = '', user_id, start_date } = event;
    if (!title || !user_id || !start_date) {
      throw {
        status: 400,
        message: 'Os campos "title", "user_id" e "start_date" são obrigatórios',
      };
    }

    const data = {
      title,
      description,
      user_id,
      start_date,
    };

    const [id] = await Event.create(data);
    const { event: createdEvent } = await getEventByPk(id);
  
    return { event: createdEvent };
  },

  async editEvent(id, event) {
    const { title, description, start_date } = event;
  
    try {
      const { event } = await getEventByPk(id);

      const data = {
        title: title ?? event.title,
        description: description ?? event.description,
        start_date: start_date ?? event.start_date,
      };

      const updatedId = await Event.update(event.id, data);
      const { event: updatedEvent } = await getEventByPk(updatedId);

      return { event: updatedEvent };
    } catch (err) {
      throw err;
    }
  },

  async destroyEvent(id) {
    try {
      await getEventByPk(id);

      await Event.destroy(id);
    } catch (err) {
      throw err;
    }
  },
};
