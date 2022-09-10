export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return createOrder(req, res)
    default:
      res.status(400).json('Bad request')
  }
}

const createOrder = (req, res) => {
  return res.status(200).json({ name: 'POST' })
}
