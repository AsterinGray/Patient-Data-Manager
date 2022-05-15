import { Patient } from '@/types/models'
import { model, models, Schema } from 'mongoose'

const PatientSchema = new Schema<Patient>(
  {
    name: {
      type: String,
      required: true,
    },
    nik: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    allergy: {
      type: String,
    },
    record: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Record',
      },
    ],
  },
  { timestamps: true }
)

const PatientModel = models.Patient || model('Patient', PatientSchema)

export default PatientModel
