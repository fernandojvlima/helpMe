const connection = require('../database/connection');


module.exports = {
  async index(request, response) {
    const cases = await connection('cases').select('*')
    return response.json(cases)
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('cases').insert({
      title,
      description,
      value,
      ong_id
    })
    return response.json({ id })
  }
}
