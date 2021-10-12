const { User, Ticket, Comment } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: {
        model: User,
        as: 'commentsAndUsers',
        attributes: ['id', 'userName']
      }
    })

    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let commentCreator = parseInt(req.params.userId)
    let commentBody = {
      userId: commentCreator,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const GetCommentById = async (req, res) => {
  try {
    let commentId = req.params.commentId
    let comment = await Comment.findByPk(commentId)
    res.send(comment)
  } catch (error) {
    throw error
  }
}
const UpdateCommentById = async (req, res) => {
  try {
    let commentCreator = req.params.commentId
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentCreator },
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.commentId)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted comment with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}
module.exports = {
  CreateComment,
  GetComments,
  GetCommentById,
  UpdateCommentById,
  DeleteComment
}
