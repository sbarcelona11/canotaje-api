import model from "../models";
const { Op } = require("sequelize");
const { Place } = model;

const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.findAll();
    return res.status(200).json({
      status: 200,
      data: places,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const getAllPlacesForUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const places = await Place.findAll({ where: { userId } });
    return res.status(200).json({
      status: 200,
      data: places,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const addPlace = async (req, res) => {
  const {
    userId,
    name,
    description,
    address,
    latitude,
    longitude,
    images,
    location,
    waterType,
  } = req.body;
  try {
    const place = await Place.create({
      userId,
      name,
      description,
      address,
      latitude,
      longitude,
      images,
      location,
      waterType,
    });
    return res.status(201).json({
      status: 201,
      data: place,
      message: "Place created successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const updatePlace = async (req, res) => {
  const { id } = req.params;
  const {
    userId,
    name,
    description,
    address,
    latitude,
    longitude,
    images,
    location,
    waterType,
  } = req.body;
  try {
    const place = await Place.findOne({ where: { id } });
    if (!place) {
      return res.status(404).json({
        status: 404,
        message: "Place not found",
      });
    }
    await Place.update(
      {
        userId,
        name,
        description,
        address,
        latitude,
        longitude,
        images,
        location,
        waterType,
      },
      { where: { id } }
    );
    return res.status(200).json({
      status: 200,
      message: "Place updated successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const deletePlace = async (req, res) => {
  const { id } = req.params;
  try {
    const place = await Place.findOne({ where: { id } });
    if (!place) {
      return res.status(404).json({
        status: 404,
        message: "Place not found",
      });
    }
    await Place.destroy({ where: { id } });
    return res.status(200).json({
      status: 200,
      message: "Place deleted successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const getPlace = async (req, res) => {
  const { id } = req.params;
  try {
    const place = await Place.findOne({ where: { id } });
    if (!place) {
      return res.status(404).json({
        status: 404,
        message: "Place not found",
      });
    }
    return res.status(200).json({
      status: 200,
      data: place,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const searchPlace = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  const query = {name: { [Op.like]: `%${name}%`} };
  try {
    const place = await Place.findAll({ where: query});
    if (!place) {
      return res.status(404).json({
        status: 404,
        message: "Place not found",
      });
    }
    return res.status(200).json({
      status: 200,
      data: place,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

const searchPlaceMultiple = async (req, res) => {
  const { name, description, location, waterType } = req.query;
  const filters = {};
  if (name) {
    filters.name = { [Op.like]: `%${name}%` };;
  }
  if (description) {
    filters.description = { [Op.like]: `%${description}%` };
  }
  if (location) {
    filters.location = { [Op.like]: `%${city}%` };
  }
  if (waterType) {
    filters.waterType = { [Op.like]: `%${waterType}%` };
  }

  const query = {
    where: filters,
  };

  console.log(query);

  try {
    const place = await Place.findAll(query);
    if (!place) {
      return res.status(404).json({
        status: 404,
        message: "Place not found",
      });
    }
    return res.status(200).json({
      status: 200,
      data: place,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "Could not perform this operation, try again later.",
    });
  }
};

export { 
  getAllPlaces,
  getPlace,
  getAllPlacesForUser,
  addPlace, 
  updatePlace, 
  deletePlace, 
  searchPlace, 
  searchPlaceMultiple 
};
