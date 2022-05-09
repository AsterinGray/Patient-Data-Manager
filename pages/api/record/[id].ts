import { DELETE, GET, PATCH } from '@/constants/method'

import connectDB from '@/middlewares/database'
import { validateAuth } from '@/middlewares/validateAuth'

import RecordModel from '@/models/record'
import { NextApiRequest, NextApiResponse } from 'next'

const record = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  const authenticate = validateAuth(req)
  if (!authenticate) return res.status(401).end()

  switch (method) {
  case GET:
    try {
      const record = await RecordModel.findById(req.query.id)
      return res.status(200).json({ record })
    } catch (err) {
      return res.status(404).json({
        message: 'Record Not Found',
      })
    }

  case PATCH:
    try {
      await RecordModel.findByIdAndUpdate(req.query.id, req.body)
      return res.status(200).json({ message: 'Record Updated' })
    } catch (err) {
      return res.status(404).json({
        message: 'Record Not Found',
      })
    }

  case DELETE:
    try {
      const record = await RecordModel.findByIdAndDelete(req.query.id)
      const patient = record.patient
      const records = await RecordModel.find({ patient }).sort({
        createdAt: -1,
      })
      return res.status(200).json({ message: 'Record Deleted', records })
    } catch (err) {
      return res.status(404).json({
        message: 'Record Not Found',
      })
    }

  default:
    return res.status(405).end()
  }
}

export default connectDB(record)
