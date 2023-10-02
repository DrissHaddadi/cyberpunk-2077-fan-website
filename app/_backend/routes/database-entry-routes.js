const express = require("express");
const router = express.Router();

const databaseEntryController = require("../controllers/database-entry-model");

// Create a new database entry
router.post("/", databaseEntryController.createDatabaseEntry);

// Get all database entries
router.get("/", databaseEntryController.getAllDatabaseEntries);

// Get a specific database entry by ID
router.get("/:id", databaseEntryController.getDatabaseEntryById);

// Update a database entry by ID
router.put("/:id", databaseEntryController.updateDatabaseEntryById);

// Delete a database entry by ID
router.delete("/:id", databaseEntryController.deleteDatabaseEntryById);

module.exports = router;
