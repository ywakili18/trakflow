const { User, Ticket, Comment } = require('../models')

const GetProfiles = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndTickets = await User.findByPk(req.params.userId, {
      include: {
        model: Ticket,
        as: 'userAndTickets'
      }
    })
    // const userAndPosts = await User.find({ include: Post })
    res.send(userAndTickets)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let userBody = req.body
    let user = await User.create(userBody)
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfiles,
  GetUserProfile,
  CreateUser
}
