"use client";
import { useState } from "react";
import Image from "next/image";

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contentType, setContentType] = useState("wallpapers");

  const contentData = {
    wallpapers: [
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
    ],
    screenshots: [
      "Cyberpunk2077-Catching_a_break-RGB-en.jpg",
      "Cyberpunk2077_Hello_stranger_RGB-en.jpg",
      "Cyberpunk2077_Im_your_fixer_RGB-en.jpg",
      "Cyberpunk2077_Love_this_town_RGB-en.jpg",
      "Cyberpunk2077_Lucky_number_13_RGB-en.jpg",
      "Cyberpunk2077_Mr_Jenkins_RGB-en.jpg",
      "Cyberpunk2077_My_name_is_Evelyn_RGB-en.jpg",
      "Cyberpunk2077_No_regrets_RGB-en.jpg",
      "Cyberpunk2077_November_2077_RGB-en.jpg",
      "Cyberpunk2077_What_can_I_get_you_RGB-en.jpg",
      "Cyberpunk2077_What_you_lookin_at_RGB-en.jpg",
      "Cyberpunk2077-A_beautiful_beast-RGB-en.jpg",
      "Cyberpunk2077-Coming_through-RGB-en.jpg",
      "Cyberpunk2077-Really_love_what_you_did_with_the_place-RGB-en.jpg",
      "Cyberpunk2077-Running_the_show-RGB-en.jpg",
      "Cyberpunk2077-Soaking_up_the_sun_RGB-en.jpg",
      "Cyberpunk2077-The_million_euro_dollar_question-RGB-en.jpg",
      "screen-Cyberpunk2077-Outnumbered_But_Not_Outgunned-RGB-en.jpg",
      "screen-different-faces-of-violence-en.jpg",
      "screen-gotta-know-where-to-look-en.jpg",
      "screen-high-speed-high-stakes-en.jpg",
      "screen-just-around-the-corner-en.jpg",
      "screen-ripperdoc-clinic-en.jpg",
      "screen-the-hottest-tech-in-town-en.jpg",
      "screen-trauma-team-en.jpg",
      "screen-a-mercenary-on-the-rise-en.jpg",
    ],
    concept_arts: [
      "Cyberpunk2077_I_make_my_own_rules-RGB-en.jpg",
      "Cyberpunk2077_Jacked_in-RGB-en.jpg",
      "Cyberpunk2077_Smoke_and_mirrors-RGB-en.jpg",
      "Cyberpunk2077_All_ready_to_go-RGB-en.jpg",
    ],
  };

  const isPreviousDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === contentData[contentType].length - 1;

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

  const switchContentType = (newType) => {
    setContentType(newType);
    setCurrentIndex(0);
  };

  return (
    <div className=" bg-black text-white font-blender_pro_book font-normal leading-[120%] flex flex-col justify-evenly content-center">
      <div className=" m-8 flex flex-row justify-evenly content-center">
        <button
          className={`px-4 mx-2 ${
            contentType === "wallpapers"
              ? " text-cyber-blue"
              : " hover:text-cyber-blue"
          } `}
          onClick={() => switchContentType("wallpapers")}
        >
          Wallpapers
        </button>
        <button
          className={`px-4 mx-2 ${
            contentType === "screenshots"
              ? " text-cyber-blue"
              : " hover:text-cyber-blue"
          } `}
          onClick={() => switchContentType("screenshots")}
        >
          Screenshots
        </button>
        <button
          className={`px-4 mx-2 ${
            contentType === "concept_arts"
              ? " text-cyber-blue"
              : " hover:text-cyber-blue"
          }`}
          onClick={() => switchContentType("concept_arts")}
        >
          Concept Arts
        </button>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <button
          onClick={goToPreviousSlide}
          className=" w-48 h-80 max-h-full hover:text-cyber-blue"
        >
          Previous image
        </button>
        <Image
          src={`/pictures/gallery/${contentType}/${contentData[contentType][currentIndex]}`}
          width={1280}
          height={720}
          alt={contentData[contentType][currentIndex]}
        />
        <button
          onClick={goToNextSlide}
          className=" w-48 h-80 max-h-full hover:text-cyber-blue"
        >
          Next Image
        </button>
      </div>
      <div className=" flex flex-row justify-center items-center p-4">
        Hello compteur {currentIndex + 1} sur {contentData[contentType].length}
      </div>
    </div>
  );
};

export default GalleryCarousel;
