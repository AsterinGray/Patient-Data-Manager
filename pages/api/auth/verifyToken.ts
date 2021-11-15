import { verify } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

import { POST } from '@/constants/method'

const verifyToken = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  const token = req.body.token

  if (!token) {
    return res.status(403).send('A token is required for authentication')
  }

  switch (method) {
    case POST:
      try {
        const decoded = verify(token, `${process.env.JWT_SECRET}`)
        if (decoded) return res.status(200).send('Valid Token')
        else return res.status(401).send('Invalid Token')
      } catch (err) {
        return res.status(401).send('Invalid Token')
      }
    default:
      return res.status(405).end()
  }
}

export default verifyToken
