import { NextApiRequest, NextApiResponse } from 'next'

import { GET, POST } from '@/constants/method'

import connectDB from '@/middlewares/database'
import { validateAuth } from '@/middlewares/validateAuth'

import PatientModel from '@/models/patient'

const patient = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  const authenticate = validateAuth(req)
  if (!authenticate) return res.status(401).end()

  switch (method) {
    case POST:
      try {
        const patientData = req.body
        const patient = new PatientModel({ ...patientData })
        const registeredPatient = await patient.save()

        return res.status(200).json({
          message: 'Patient Created',
          registeredPatient,
        })
      } catch (err) {
        return res.status(400).json({
          message: 'Create Patient Failed',
        })
      }

    case GET:
      try {
        const updatedAt: any = req.query.updatedAt
        let patients

        if (!req.query.updatedAt)
          patients = await PatientModel.find(req.query).sort({ name: 1 })
        else
          patients = await PatientModel.find({
            updatedAt: { $gte: updatedAt },
          }).sort({ updatedAt: -1 })

        return res.status(200).json({ patients })
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
