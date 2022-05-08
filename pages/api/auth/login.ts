import { POST } from '@/constants/method'

import connectDB from '@/middlewares/database'

import UserModel from '@/models/user'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
  case POST:
    try {
      const user = await UserModel.findOne({
        username: req.body.username,
      })

      if (!user)
        return res.status(401).json({ message: 'Authentication Failed' })

      const isPasswordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      )
      if (!isPasswordMatch)
        return res.status(401).json({
          message: 'Password is invalid',
        })

      return res.status(200).json({
        message: 'Login Success',
        token: sign(
          {
            id: user._id,
            username: user.username,
          },
          `${process.env.JWT_SECRET}`
        ),
      })
    } catch (err) {
      return res.status(401).json({
        message: 'Authentication Failed',
      })
    }

  default:
    return res.status(405).end()
  }
}

export default connectDB(login)
