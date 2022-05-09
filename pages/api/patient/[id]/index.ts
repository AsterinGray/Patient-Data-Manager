import { DELETE, GET, PATCH } from '@/constants/method'

import connectDB from '@/middlewares/database'
import { validateAuth } from '@/middlewares/validateAuth'

import PatientModel from '@/models/patient'
import { NextApiRequest, NextApiResponse } from 'next'

const patient = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  const authenticate = validateAuth(req)
  if (!authenticate) return res.status(401).end()

  switch (method) {
  case GET:
    try {
      const patient = await PatientModel.findById(req.query.id)
      return res.status(200).json({ patient })
    } catch (err) {
      return res.status(404).json({
        message: 'Patient Not Found',
      })
    }

  case PATCH:
    try {
      const patient = await PatientModel.findByIdAndUpdate(
        req.query.id,
        req.body
      )
      return res.status(200).json({ message: `${patient.name} updated` })
    } catch (err) {
      return res.status(404).json({
        message: 'Patient Not Found',
      })
    }

  case DELETE:
    try {
      const patient = await PatientModel.findByIdAndDelete(req.query.id)
      const patients = await PatientModel.find(req.query).sort({ name: 1 })
      return res.status(200).json({
        message: `${patient.name} deleted`,
        patients
      })
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
