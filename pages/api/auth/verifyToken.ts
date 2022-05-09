import { POST } from '@/constants/method'
import { verify } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

const verifyToken = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  const token = req.body.token

  if (!token) {
    return res.status(403).json(
      { message: 'A token is required for authentication' }
    )
  }

  switch (method) {
  case POST:
    try {
      const decoded = verify(token, `${process.env.JWT_SECRET}`)
      if (decoded) return res.status(200).json({ message: 'Valid Token' })
      else return res.status(401).json({ message: 'Invalid Token' })
    } catch (err) {
      return res.status(401).json({ message: 'Invalid Token' })
    }
  default:
    return res.status(405).end()
  }
}

export default verifyToken
