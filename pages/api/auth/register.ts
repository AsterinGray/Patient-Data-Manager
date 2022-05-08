import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'

import { POST } from '@/constants/method'

import connectDB from '@/middlewares/database'

import UserModel from '@/models/user'

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
  case POST:
    try {
      const userData = req.body
      const uniqueUsername = await UserModel.findOne({
        username: userData.username,
      })

      if (uniqueUsername)
        return res.status(400).json({ message: 'Username had been used' })

      try {
        const password = await bcrypt.hash(userData.password, 10)
        const user = new UserModel({
          ...userData,
          password,
        })
        const registeredUser = await user.save()
        return res.status(201).json(registeredUser)
      } catch (err) {
        return res.status(400).json({ message: 'Register Failed' })
      }
    } catch (err) {
      return res.status(400).json({ message: 'Register Failed' })
    }

  default:
    return res.status(405).end()
  }
}

export default connectDB(register)
