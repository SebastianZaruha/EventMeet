const db = require('../config/database');

class Event {
  static async getAll() {
    const result = await db.query('SELECT * FROM events');
    return result.rows;
  }

  static async create(event) {
    const { name, date, location } = event;
    const result = await db.query(
      'INSERT INTO events (name, date, location) VALUES ($1, $2, $3) RETURNING *',
      [name, date, location]
    );
    return result.rows[0];
  }
}

module.exports = Event;
