const mongoose = require("mongoose");

const databaseEntrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  corpus: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DatabaseEntry",
  },
  parentSubcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DatabaseEntry",
  },
});

const DatabaseEntry = mongoose.model("DatabaseEntry", databaseEntrySchema);

module.exports = DatabaseEntry;
