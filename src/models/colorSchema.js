import mongoose from 'mongoose';

const Color = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hexa: {
    type: String,
    required: true,
  },
  rgb: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Colors', Color);
