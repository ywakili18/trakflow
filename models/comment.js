'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Ticket, {
        foreignKey: 'ticketId',
        as: 'commentsAndTickets'
      })
      Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'commentsAndUsers'
      })
    }
  }
  Comment.init(
    {
      commentContent: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ticketId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'tickets',
          key: 'id'
        },
        allowNull: false
      },
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
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
