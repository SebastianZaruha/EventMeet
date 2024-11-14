const Event = require('../models/Event');
const User = require('../models/User');
const Registration = require('../models/Registration');

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registerUserToEvent = async (req, res) => {
  try {
    const { userId, eventId } = req.body;
    const registration = await Registration.create({ UserId: userId, EventId: eventId });
    await Event.increment('attendeesCount', { where: { id: eventId } });
    res.json(registration);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createEvent, getAllEvents, registerUserToEvent };
