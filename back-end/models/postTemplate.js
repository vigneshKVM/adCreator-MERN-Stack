const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const templateSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  elements: [
      {
        type: {
          type: String,
          required: true
        },
        value: {
          type: String,
          required: true
        },
        style: {
          type: Object,
          required: true
        },
        position: {
          type: Object,
          required: true
        }
      }
  ],
});

module.exports = mongoose.model('PostTemplate', templateSchema);
