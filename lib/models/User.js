import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, required: true },
  uuid: { type: String }
}, {
  timestamps: true
})

UserSchema.pre('save', function () {
  if (!(this.uuid)) {
    console.log('need to create uuid')
    this.uuid = 'test uuid'
  }

  return next()
})

export default mongoose.model('User', UserSchema)
