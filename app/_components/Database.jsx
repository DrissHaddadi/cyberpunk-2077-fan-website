// Import des modules et composants nécessaires
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import DatabaseEntryEditor from "./DatabaseEntryEditor";

// Définition du composant 'Database'
const Database = () => {
  // États pour stocker les données de la base de données et l'entrée sélectionnée
  const [database, setDatabase] = useState([""]);
  const [selectedDatabaseEntry, setSelectedDatabaseEntry] = useState(null);

  // Utilisation du hook useEffect pour charger les données lors du montage du composant
  useEffect(() => {
    fetchData();
  }, []);

  // Fonction pour récupérer les données depuis l'API
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/database_entry");
      setDatabase(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  }

  // Fonction pour gérer le clic sur un bouton d'entrée
  function handleButtonClick(entryId) {
    const selectedEntry = database.find((entry) => entry._id === entryId);
    setSelectedDatabaseEntry(selectedEntry);
  }

  // Utilisation du hook useEffect pour sélectionner la première entrée lorsque la base de données change
  useEffect(() => {
    if (database.length > 0) {
      setSelectedDatabaseEntry(database[0]);
    }
  }, [database]);

  // Alias pour l'entrée sélectionnée à des fins d'édition
  const EntryToEdit = selectedDatabaseEntry;

  // Fonction pour mettre à jour une entrée dans la base de données
  const updateDatabaseEntry = (updatedEntry) => {
    // Créez une nouvelle copie du tableau 'database' en mettant à jour un élément.
    const updatedDatabase = database.map((entry) =>
      entry._id === updatedEntry._id ? updatedEntry : entry
    );

    // Mettez à jour le tableau 'database' avec la nouvelle copie.
    setDatabase(updatedDatabase);
    setSelectedDatabaseEntry(updatedEntry);
  };

  return (
    <div className=" text-white w-full p-8 flex flex-col">
      <div className=" flex flex-row justify-center items-center p-8 text-cyber-red">
        <h2 className=" font-play_regular text-5xl">Database</h2>
      </div>
      <div className=" flex flex-row">
        <div className="basis-1/3 mr-2 border-2 border-cyber-red rounded">
          <ul className="p-4 w-full">
            {database.map((entry) => (
              <li key={entry._id}>
                <button
                  className="block w-full p-2 text-left focus:outline-none hover:bg-gray-900 font-play_regular text-cyber-red"
                  onClick={() => handleButtonClick(entry._id)}
                >
                  {entry.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className=" basis-2/3 ml-2 p-8 border-2  border-cyber-red text-cyber-red rounded flex flex-col items-center ">
          <div className=" w-full">
            {selectedDatabaseEntry && (
              <div className=" border-cyber-red-dark">
                <div className="mb-4">
                  <h3 className="font-play_regular text-2xl leading-[42px]">
                    {selectedDatabaseEntry.title}
                  </h3>
                </div>
                <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                  {selectedDatabaseEntry.imageURL && (
                    <Image
                      src={
                        "/pictures/encyclopedia/" +
                        selectedDatabaseEntry.imageURL
                      }
                      alt={selectedDatabaseEntry.title}
                      width={1860}
                      height={609}
                    />
                  )}
                </div>
                <div className="mt-4">
                  {selectedDatabaseEntry.corpus && (
                    <p className=" whitespace-pre-line font-play_regular text-base leading-7">
                      {selectedDatabaseEntry.corpus}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className=" mt-4 w-full pt-4 border-t-2 border-cyber-red-dark">
            <DatabaseEntryEditor
              entryToEdit={EntryToEdit}
              updateDatabaseEntry={updateDatabaseEntry}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
