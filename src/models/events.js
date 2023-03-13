'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { as: "users", foreignKey: "userId" });
      this.belongsTo(models.Place, { as: "places", foreignKey: "placeId" });
    }
  }

  Events.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      images: {
        type: DataTypes.JSON,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Event",
      timestamps: true,
      underscored: false,
    }
  );
  return Events;
};