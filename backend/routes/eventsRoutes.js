const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents, registerUserToEvent } = require('../controllers/eventController');

router.post('/create', createEvent);
router.get('/', getAllEvents);
router.post('/register', registerUserToEvent);

module.exports = router;
