import { PrismaClient } from '@prisma/client'

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return createOrder(req, res)
    default:
      res.status(400).json('Bad request')
  }
}

const createOrder = async (req, res) => {
  const prisma = new PrismaClient()

  const { name, order, date, total } = req.body

  const dbOrder = await prisma.order.create({
    data: {
      name,
      date,
      order,
      total,
    },
  })

  return res.status(200).json(dbOrder)
}
