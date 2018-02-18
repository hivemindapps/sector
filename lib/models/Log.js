import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LogSchema = new Schema({
  msg: { type: String, required: true },
  payload: { type: Schema.Types.Mixed },
  level: { type: Number, default: 4 },
  sector: { type: String },
  app: { type: String },
  admin: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

export default mongoose.model('Log', LogSchema)
