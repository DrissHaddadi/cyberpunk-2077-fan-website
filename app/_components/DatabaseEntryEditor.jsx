"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const DatabaseEntryEditor = (props) => {
  const { entryToEdit } = props; // Destructure entryToEdit from props

  // Utilisez des états pour stocker les modifications
  const [editedTitle, setEditedTitle] = useState("");
  const [editedCorpus, setEditedCorpus] = useState("");
  const [editedImageURL, setEditedImageURL] = useState("");

  // Mettez à jour les états initiaux lorsque entryToEdit change
  useEffect(() => {
    setEditedTitle(entryToEdit.title);
    setEditedCorpus(entryToEdit.corpus);
    setEditedImageURL(entryToEdit.imageURL);
  }, [entryToEdit]);

  const updateToDatabase = (data) => {
    console.log("Id : " + entryToEdit._id);
    // Envoyez la requête PUT à l'API pour mettre à jour les données
    axios
      .put(`http://localhost:5000/database_entry/${entryToEdit._id}`, data)
      .then((response) => {
        // Mettez à jour les données ou effectuez d'autres actions nécessaires en cas de succès
        console.log("Mise à jour réussie !");
        // Vous pouvez également fermer le formulaire d'édition ou effectuer d'autres actions ici
      })
      .catch((error) => {
        // Gérez les erreurs en conséquence
        console.error("Erreur lors de la mise à jour :", error);
      });
  };

  const handleSaveClick = () => {
    console.log("handleSaveClick activé");
    // Construisez un objet contenant les données mises à jour
    const updatedData = {
      title: editedTitle,
      corpus: editedCorpus,
      imageURL: editedImageURL,
    };
    console.log(updatedData);
    updateToDatabase(updatedData);
  };

  return (
    <div className="text-cyber-red font-play_regular text-base leading-7">
      <p>
        {props.message} We are going to edit {entryToEdit.title}
      </p>
      <div className="flex flex-col w-full">
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="text-cyber-red font-play_regular">
              Titre :
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedTitle}
              onChange={(onChangeEvenement) =>
                setEditedTitle(onChangeEvenement.target.value)
              }
              className="w-full p-2 border border-cyber-red-dark rounded-md bg-gray-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="corpus"
              className="text-cyber-red font-play_regular"
            >
              Corpus :
            </label>
            <textarea
              id="corpus"
              name="corpus"
              value={editedCorpus}
              onChange={(onChangeEvenement) =>
                setEditedCorpus(onChangeEvenement.target.value)
              }
              className="w-full p-2 border border-cyber-red-dark rounded-md h-40 resize-y bg-gray-900"
            />
          </div>
          <div>
            <label
              htmlFor="imageURL"
              className="text-cyber-red font-play_regular"
            >
              ImageURL :
            </label>
            <input
              type="text"
              id="imageURL"
              name="imageURL"
              value={editedImageURL}
              onChange={(onChangeEvenement) =>
                setEditedImageURL(onChangeEvenement.target.value)
              }
              className="w-full p-2 border border-cyber-red-dark rounded-md bg-gray-900"
            />
          </div>
        </form>
        <button onClick={handleSaveClick} className="mt-4 p-2">
          Enregistrer
        </button>
      </div>
    </div>
  );
};

export default DatabaseEntryEditor;
