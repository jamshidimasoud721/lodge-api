const mongoose = require('mongoose');

const newItemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  photo: { type: String, required: true }
});

module.exports = mongoose.model('NewItems', newItemsSchema);
