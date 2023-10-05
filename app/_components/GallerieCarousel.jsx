"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const GallerieCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesArray = [
    "Dragon_Meditation.png",
    "Cyberpunk2077NG_Cover_art_RGB-en.jpg",
    "VDay-en.jpg",
    "Edward_Hopper-V.png",
    "Klimt-Judy.png",
    "Claude_Monet-NC.png",
    "Cyberpunk2077_Lunar-New-Year_RGB-en.jpg",
    "CNY_Artwork-en.jpg",
    "Jacket_Illustration-en.jpg",
    "V-Origami-en.jpg",
    "CP77_DBF_rgb-en.jpg",
    // Ajoutez plus d'images ici
  ];

  const wallpaperFilePath = "/pictures/gallerie/wallpapers/";

  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === imagesArray.length - 1;

  const goToPreviousSlide = () => {
    if (!isPreviousDisabled) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (!isNextDisabled) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className=" bg-black text-white font-blender_pro_book font-normal leading-[120%] flex flex-col justify-evenly content-center">
      <div className="flex flex-row justify-evenly content-center">
        <button onClick={goToPreviousSlide} className=" hover:text-cyber-blue">
          Previous image
        </button>
        <Image
          src={`${wallpaperFilePath}${imagesArray[currentIndex]}`}
          width={1280}
          height={720}
          alt={imagesArray[currentIndex]}
        />
        <button onClick={goToNextSlide} className=" hover:text-cyber-blue">
          Next Image
        </button>
      </div>
    </div>
  );
};

export default GallerieCarousel;
