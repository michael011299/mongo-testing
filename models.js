const { Schema, model } = require('mongoose');

const catSchema = new Schema({
  name: { type: String, required: true },
  colour: String,
  evil: Boolean,
});

// This model is similar to a DAO
const catModel = model('cats', catSchema);

module.exports = {
  catModel,
};
