import express from 'express';
const eventsRouter = express.Router();
const { getAllEvents, getEvent, getAllEventsForUser, addEvent, updateEvent, deleteEvent, searchEvent } = require('../controllers/events.js');

eventsRouter.get('/', getAllEvents);
eventsRouter.get('/:id', getEvent);
eventsRouter.get('/user/:userId', getAllEventsForUser);
eventsRouter.get('/search/key', searchEvent);
eventsRouter.post('/add', addEvent);
eventsRouter.put('/update/:id', updateEvent);
eventsRouter.delete('/delete/:id', deleteEvent);

export default eventsRouter;
