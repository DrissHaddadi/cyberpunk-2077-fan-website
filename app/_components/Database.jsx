"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

const Database = () => {
  const [database, setDatabase] = useState([""]);
  const [selectedDatabaseEntry, setSelectedDatabaseEntry] =
    useState("Night City");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/database_entry");
      setDatabase(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  }

  console.log(database);

  function handleButtonClick(entryId) {
    console.log("handleButtonClick actived");
    const selectedEntry = database.find((entry) => entry._id === entryId);
    setSelectedDatabaseEntry(selectedEntry);
    console.log(selectedDatabaseEntry);
  }

  return (
    <div className=" text-white w-full p-8 flex flex-col">
      <div className=" flex flex-row justify-center items-center p-8 text-cyber-red">
        <h2 className=" font-play_regular text-5xl">Database</h2>
      </div>
      <div className=" flex flex-row">
        <div className="basis-1/3 border-8 mr-2 border-cyber-yellow">
          <ul className="p-4 w-full">
            {database.map((entry) => (
              <li key={entry._id}>
                <button
                  className="block w-full p-2 text-left focus:outline-none hover:bg-slate-700 hover:text-white"
                  onClick={() => handleButtonClick(entry._id)}
                >
                  {entry.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className=" basis-2/3 ml-2 p-8 border-2  border-cyber-red text-cyber-red flex flex-col items-center ">
          <div>
            {selectedDatabaseEntry && (
              <div>
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
                    <p className="font-play_regular text-base leading-7">
                      {selectedDatabaseEntry.corpus}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
