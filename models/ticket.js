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
      Ticket.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'ticketsAndUsers'
      })
      Ticket.hasMany(models.Comment, {
        foreignKey: 'ticketId',
        as: 'ticketsAndComments'
      })
    }
  }
  Ticket.init(
    {
      ticketTitle: { type: DataTypes.STRING, allowNull: false },
      ticketDescription: { type: DataTypes.STRING, allowNull: false },
      priority: { type: DataTypes.STRING, allowNull: false },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Ticket',
      tableName: 'tickets'
    }
  )
  return Ticket
}
