import { GET, POST } from '@/constants/method'

import connectDB from '@/middlewares/database'
import { validateAuth } from '@/middlewares/validateAuth'

import RecordModel from '@/models/record'
import { NextApiRequest, NextApiResponse } from 'next'

const record = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  const authenticate = validateAuth(req)
  if (!authenticate) return res.status(401).end()

  switch (method) {
  case POST:
    try {
      const record = new RecordModel({ ...req.body })
      const registeredRecord = await record.save()
      return res.status(200).json(registeredRecord)
    } catch (err) {
      return res.status(400).json({
        message: 'Add Record Failed',
      })
    }

  case GET:
    try {
      const updatedAt: any = req.query.updatedAt
      let records
      if (!updatedAt)
        records = await RecordModel.find(req.query).sort({ name: 1 })
      else
        records = await RecordModel.find({
          updatedAt: { $gte: updatedAt },
        })
          .populate({ path: 'patient' })
          .sort({ updatedAt: -1 })

      return res.status(200).json({ records })
    } catch (err) {
      return res.status(400).json({
        message: 'Get Record Failed',
      })
    }

  default:
    return res.status(405).end()
  }
}

export default connectDB(record)
