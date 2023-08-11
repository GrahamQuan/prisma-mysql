const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const userRoute = express.Router()

userRoute.get('/', async (req, res) => {
  const allUsers = await prisma.user.findMany()
  res.json(allUsers)
})

userRoute.post('/', async (req, res) => {
  const { firstName, lastName, age } = req.body
  const newUser = await prisma.user.create({
    data: { firstName, lastName, age }
  })
  res.json(newUser)
})

userRoute.put('/:userId', async (req, res) => {
  const userId = req.params.userId
  const { firstName, lastName, age } = req.body
  const updatedUser = await prisma.user.update({
    where: { 
      id: Number(userId)
    },
    data: { 
      firstName, 
      lastName, 
      age 
    }
  })
  res.json(updatedUser)
})

userRoute.delete('/:userId', async (req, res) => {
  const userId = req.params.userId
  const deletedUser = await prisma.user.delete({
    where: { 
      id: Number(userId)
    },
  })
  res.json(deletedUser)
})

module.exports = userRoute