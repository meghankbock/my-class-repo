const { Schema, Types } = require('mongoose');

const noteSchema = new Schema({
    noteId: {
        type: Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    noteText: {
    type: String,
    trim: true,
    required: true,
  }
});

const Notes = model('Notes', noteSchema);

module.exports = Notes;
