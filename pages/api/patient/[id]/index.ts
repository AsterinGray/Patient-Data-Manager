import { NextApiRequest, NextApiResponse } from 'next'

import { DELETE, GET, PATCH } from '@/constants/method'

import connectDB from '@/middlewares/database'
import { validateAuth } from '@/middlewares/validateAuth'

import PatientModel from '@/models/patient'

const patient = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  const authenticate = validateAuth(req)
  if (!authenticate) return res.status(401).end()

  switch (method) {
    case GET:
      try {
        const patient = await PatientModel.findById(req.query.id)
        console.log(patient)
        return res.status(200).json({ patient })
      } catch (err) {
        return res.status(404).json({
          message: 'Patient Not Found',
        })
      }

    case PATCH:
      try {
        await PatientModel.findByIdAndUpdate(req.query.id, req.body)
        return res.status(200).json({ message: 'Patient Updated' })
      } catch (err) {
        return res.status(404).json({
          message: 'Patient Not Found',
        })
      }

    case DELETE:
      try {
        await PatientModel.findByIdAndDelete(req.query.id)
        return res.status(200).json({ message: 'Patient Deleted' })
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
