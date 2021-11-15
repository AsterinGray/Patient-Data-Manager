import { verify } from 'jsonwebtoken'
import { NextApiRequest } from 'next'

export const validateAuth = (req: NextApiRequest) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1]
    verify(token, `${process.env.JWT_SECRET}`, (err) => {
      if (err) return false
    })
  } else return false

  return true
}
