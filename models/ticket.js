'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init(
    {
      ticketTitle: DataTypes.STRING,
      ticketDescription: DataTypes.STRING,
      priority: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Ticket',
      tableName: 'tickets'
    }
  )
  return Ticket
}
