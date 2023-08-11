const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const houseRoute = express.Router()

// houseRoute.get('/', async (req, res) => {
//   const houses = await prisma.house.findMany({
//     include: {
//       owner: true,
//       builtBy: false
//     }
//   })
//   res.json(houses)
// })

houseRoute.post('/', async (req, res) => {
  const { address, network, ownerId, builtById } = req.body
  const newHouse = await prisma.house.create({
    data: { address, network, ownerId, builtById }
  })
  res.json(newHouse)
})

houseRoute.get('/:houseId', async (req, res) => {
  const houseId = req.params.houseId
  const house = await prisma.house.findUnique({
    where: {
      id: houseId
    },
    include: {
      owner: true,
      builtBy: false
    }
  })
  res.json(house)
})

houseRoute.get('/', async (req, res) => {
  const houses = await prisma.house.findMany({
    where: {
      network: {
        not: null
      },
      owner: {
        age: {
          gte: 30
        }
      }
    },
    orderBy: {
      owner: {
        firstName: "desc"
      }
    },
    include: {
      owner: true,
      builtBy: true
    }
  })
  res.json(houses)
})

module.exports = houseRoute