const Event = require('../models/event');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.getAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener eventos' });
  }
};

const createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear evento' });
  }
};

module.exports = { getAllEvents, createEvent };
