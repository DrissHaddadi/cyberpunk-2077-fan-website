const DatabaseEntry = require("../models/database-entry-model");

exports.createDatabaseEntry = async (req, res) => {
  try {
    const newDatabaseEntry = await DatabaseEntry.create(req.body);
    res.status(201).json(newDatabaseEntry);
  } catch (error) {
    res.status(500).json({ error: "Failed to create the database entry." });
  }
};

exports.getAllDatabaseEntries = async (req, res) => {
  try {
    const databaseEntries = await DatabaseEntry.find();
    res.status(200).json(databaseEntries);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve database entries." });
  }
};

exports.getDatabaseEntryById = async (req, res) => {
  const { id } = req.params;
  try {
    const databaseEntry = await DatabaseEntry.findById(id);
    if (!databaseEntry) {
      return res.status(404).json({ message: "Database entry not found." });
    }
    res.status(200).json(databaseEntry);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the database entry." });
  }
};

exports.updateDatabaseEntryById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDatabaseEntry = await DatabaseEntry.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedDatabaseEntry) {
      return res.status(404).json({ message: "Database entry not found." });
    }
    res.status(200).json(updatedDatabaseEntry);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the database entry." });
  }
};

exports.deleteDatabaseEntryById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDatabaseEntry = await DatabaseEntry.findByIdAndRemove(id);
    if (!deletedDatabaseEntry) {
      return res.status(404).json({ message: "Database entry not found." });
    }
    res.status(200).json({ message: "Database entry deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the database entry." });
  }
};
