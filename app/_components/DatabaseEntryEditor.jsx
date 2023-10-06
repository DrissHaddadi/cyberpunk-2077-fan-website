"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const DatabaseEntryEditor = (props) => {
  // État pour gérer le mode édition
  const [isEditing, setIsEditing] = useState(false);

  // Fonction pour basculer entre le mode édition et le mode affichage
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  // Destructuration de 'entryToEdit' depuis les props
  const { entryToEdit } = props;

  // Utilisation d'états pour stocker les modifications apportées à l'entrée
  const [editedTitle, setEditedTitle] = useState("");
  const [editedCorpus, setEditedCorpus] = useState("");
  const [editedImageURL, setEditedImageURL] = useState("");

  // Mettez à jour les états initiaux lorsque 'entryToEdit' change
  useEffect(() => {
    if (entryToEdit) {
      setEditedTitle(entryToEdit.title || "");
      setEditedCorpus(entryToEdit.corpus || "");
      setEditedImageURL(entryToEdit.imageURL || "");
    } else {
      setEditedTitle("");
      setEditedCorpus("");
      setEditedImageURL("");
    }
  }, [entryToEdit]);

  // Fonction pour mettre à jour l'entrée dans la base de données
  const updateToDatabase = (data) => {
    // Envoyez une requête PUT à l'API pour mettre à jour les données
    axios
      .put(`http://localhost:5000/database_entry/${entryToEdit._id}`, data)
      .then((response) => {
        // Mettez à jour les données ou effectuez d'autres actions nécessaires en cas de succès
        // Mettez à jour l'entrée correspondante dans le tableau de données du composant parent
        props.updateDatabaseEntry(response.data);
        // Vous pouvez également fermer le formulaire d'édition ou effectuer d'autres actions ici
      })
      .catch((error) => {
        // Gérez les erreurs en conséquence
        console.error("Erreur lors de la mise à jour :", error);
      });
  };

  // Gestion du clic sur le bouton de sauvegarde
  const handleSaveClick = () => {
    // Construisez un objet contenant les données mises à jour
    const updatedData = {
      title: editedTitle,
      corpus: editedCorpus,
      imageURL: editedImageURL,
    };
    updateToDatabase(updatedData);
  };

  return (
    <div className="text-cyber-red font-play_regular text-base leading-7">
      <div className=" flex flex-col justify-start">
        <button
          className=" mt-2 p-2 bg-slate-900 hover:bg-gray-700 border-2 border-cyber-red-dark rounded"
          onClick={toggleEditing}
        >
          Edit entry
        </button>
      </div>
      {isEditing && (
        <div className=" mt-8 flex flex-col w-full">
          <form>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="text-cyber-red font-play_regular"
              >
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
          <button
            onClick={() => {
              handleSaveClick();
              toggleEditing();
            }}
            className="mt-8 p-2 bg-gray-900 hover:bg-gray-700 border-2 border-cyber-red-dark rounded"
          >
            Save edit.{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default DatabaseEntryEditor;
