const Segment = require('../models/Segment');

module.exports = {  
  async listSegment(where = {}) {
    const segments = await Segment.findAll(where);

    return { segments };
  },
};
