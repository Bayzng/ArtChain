const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  creatorName: { type: String, required: true },  
  creatorImage: { type: String, required: true }  
});

module.exports = mongoose.model('Art', artSchema);
