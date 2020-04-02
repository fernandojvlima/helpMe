const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const id = request.headers.authorization;

    const casesOng = await connection('cases')
      .where('ong_id', id)
      .select('*');
    return response.json(casesOng)
  }
}
