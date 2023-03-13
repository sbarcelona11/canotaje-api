'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Places extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { as: "users", foreignKey: "userId" });
      this.hasMany(models.Event, { as: "events", foreignKey: "placeId" });
      this.hasMany(models.Comment, { as: "comments", foreignKey: "placeId" });
      this.hasMany(models.Review, { as: "reviews", foreignKey: "placeId" });
    }
  }

  Places.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      images: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      waterType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Place",
      timestamps: true,
      underscored: false,
    }
  );
  return Places;
};