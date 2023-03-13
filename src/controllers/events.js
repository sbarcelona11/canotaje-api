import model from "../models";
const { Op } = require("sequelize");
const { Event } = model;

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    return res.status(200).json({
      status: 200,
      data: events,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const getEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findOne({ where: { id } });
    return res.status(200).json({
      status: 200,
      data: event,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const getAllEventsForUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const events = await Event.findAll({ where: { userId } });
    return res.status(200).json({
      status: 200,
      data: events,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const addEvent = async (req, res) => {
  const { placeId, userId, name, description, date, images } = req.body;

  console.log(req.body);
  try {
    const event = await Event.create({
      placeId,
      userId,
      name,
      description,
      date,
      images,
    });
    return res.status(201).json({
      status: 201,
      data: event,
      message: "Event created successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { placeId, userId, name, description, date, images } = req.body;
  try {
    const event = await Event.findOne({ where: { id } });
    if (!event) {
      return res.status(404).json({
        status: 404,
        message: "Event not found",
      });
    }
    await Event.update(
      {
        placeId,
        userId,
        name,
        description,
        date,
        images,
      },
      { where: { id } }
    );
    return res.status(200).json({
      status: 200,
      message: "Event updated successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.destroy({ where: { id } });
    return res.status(200).json({
      status: 200,
      data: event,
      message: "Event deleted successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const searchEvent = async (req, res) => {
  const { name } = req.query;
  const query = { name: { [Op.like]: `%${name}%` } };
  try {
    const events = await Event.findAll({ where: query });
    console.log('aaaaa', events);
    return res.status(200).json({
      status: 200,
      data: events,
      message: "Event found successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

export {
  getAllEvents,
  getEvent,
  getAllEventsForUser,
  addEvent,
  updateEvent,
  deleteEvent,
  searchEvent,
};
