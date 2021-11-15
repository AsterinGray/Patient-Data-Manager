import { NextApiRequest, NextApiResponse } from 'next'

import { GET } from '@/constants/method'

import connectDB from '@/middlewares/database'
import { validateAuth } from '@/middlewares/validateAuth'

import RecordModel from '@/models/record'

const patient = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  const authenticate = validateAuth(req)
  if (!authenticate) return res.status(401).end()

  switch (method) {
    case GET:
      try {
        const id: any = req.query.id
        const records = await RecordModel.find({ patient: id }).sort({
          createdAt: -1,
        })
        return res.status(200).json({ records })
      } catch (err) {
        return res.status(404).json({
          message: 'Patient Not Found',
        })
      }

    default:
      return res.status(405).end()
  }
}

export default connectDB(patient)
