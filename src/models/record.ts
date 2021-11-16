import { model, models, Schema } from 'mongoose'

import { Record } from '@/types/models'

const RecordSchema = new Schema<Record>(
  {
    symptoms: {
      type: String,
      required: true,
    },
    treatment: {
      type: String,
      required: true,
    },
    medicine: {
      type: String,
      required: true,
    },
    patient: {
      type: Schema.Types.ObjectId,
      ref: 'Patient',
    },
  },
  { timestamps: true }
)

const RecordModel = models.Record || model('Record', RecordSchema)

export default RecordModel
