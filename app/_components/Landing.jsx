"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  const [selectedFeature, setSelectedFeature] = useState("Night City");
  const [selectFeaturePicture, setFeaturePicture] = useState("Picture 01");
  console.log(selectedFeature);
  console.log(selectFeaturePicture);

  return (
    <div className=" bg-cyber-yellow p-8">
      <nav className="flex justify-center">
        <ul className=" flex border-2 border-black rounded-lg text-black font-blender_pro text-lg font-medium uppercase">
          <li
            className={`px-4 py-2 hover:bg-black hover:text-cyber-yellow ${
              selectedFeature === "Night City"
                ? "bg-black text-cyber-yellow"
                : ""
            }`}
          >
            <button onClick={() => setSelectedFeature("Night City")}>
              Night City
            </button>
          </li>
          <li
            className={`px-4 py-2 hover:bg-black hover:text-cyber-yellow ${
              selectedFeature === "People" ? "bg-black text-cyber-yellow" : ""
            }`}
          >
            <button onClick={() => setSelectedFeature("People")}>People</button>
          </li>
          <li
            className={`px-4 py-2 hover:bg-black hover:text-cyber-yellow ${
              selectedFeature === "Corporations"
                ? "bg-black text-cyber-yellow"
                : ""
            }`}
          >
            <button onClick={() => setSelectedFeature("Corporations")}>
              Corporations
            </button>
          </li>
          <li
            className={`px-4 py-2 hover:bg-black hover:text-cyber-yellow ${
              selectedFeature === "Gangs" ? "bg-black text-cyber-yellow" : ""
            }`}
          >
            <button onClick={() => setSelectedFeature("Gangs")}>Gangs</button>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col justify-center items-center border-8 mx-2 my-10 border-black bg-black text-white">
        {selectedFeature === "Night City" && (
          <div className=" flex">
            {selectFeaturePicture === "Picture 01" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/night-city/Cyberpunk2077_Love_this_town_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_Love_this_town_RGB-en.jpg"
                />
              </div>
            )}
            {selectFeaturePicture === "Picture 02" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/night-city/Cyberpunk2077_November_2077_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_November_2077_RGB-en"
                />
              </div>
            )}
            {selectFeaturePicture === "Picture 03" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/night-city/Cyberpunk2077_No_regrets_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_No_regrets_RGB-en"
                />
              </div>
            )}

            <div className=" p-2 basis-2/5 flex flex-col justify-center items-center">
              <div className=" py-4 px-8 flex flex-col justify-center items-center">
                <div className="flex w-full justify-start">
                  <h2 className=" py-4 text-[44px] font-refinery_25 font-bold uppercase">
                    Night City
                  </h2>
                </div>
                <p className=" py-4 font-blender_pro_book text-[22px] font-normal	leading-[120%]">
                  The Free City of Night City is an autonomous city located on
                  the border between North and South California, on the Pacific
                  coast of North America. It is considered a modern
                  multicultural metropolis of the 21st-century, overrun by
                  corporations, corruption, organized crime and gang violence.
                </p>
                <Link
                  className=" bg-cyber-blue px-4 py-2 text-black text-lg font-medium uppercase hover"
                  href={"/"}
                >
                  Learn more
                </Link>
              </div>

              <div className=" w-full flex">
                <ul className=" grow flex justify-around">
                  <li className=" pl-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 01")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/night-city/Cyberpunk2077_Love_this_town_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_Love_this_town_RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 01"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>
                    </button>
                  </li>
                  <li className=" pl-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 02")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/night-city/Cyberpunk2077_November_2077_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_November_2077_RGB-en"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 02"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>{" "}
                    </button>
                  </li>
                  <li className=" px-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 03")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/night-city/Cyberpunk2077_No_regrets_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_No_regrets_RGB-en"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 03"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {selectedFeature === "People" && (
          <div className=" flex">
            {selectFeaturePicture === "Picture 01" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/people/Cyberpunk2077_Lucky_number_13_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_Lucky_number_13_RGB-en.jpg"
                />
              </div>
            )}
            {selectFeaturePicture === "Picture 02" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/people/CyberpunK2077_ Screen_ripperdoc_clinic-RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="CyberpunK2077_ Screen_ripperdoc_clinic-RGB-en.jpg"
                />
              </div>
            )}
            {selectFeaturePicture === "Picture 03" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/people/Cyberpunk2077_Im_your_fixer_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_Im_your_fixer_RGB-en.jpg"
                />
              </div>
            )}

            <div className=" p-2 basis-2/5 flex flex-col justify-center items-center">
              <div className=" py-4 px-8 flex flex-col justify-center items-center">
                <div className="flex w-full justify-start">
                  <h2 className=" py-4 text-[44px] font-refinery_25 font-bold uppercase">
                    People
                  </h2>
                </div>
                <p className=" py-4 font-blender_pro_book text-[22px] font-normal	leading-[120%]">
                  Meet a host of memorable characters, from rockerboy rebel
                  Johnny Silverhand to a variety of fixers, friends, and enemies
                  — all of whom have their own agenda
                </p>
                <Link
                  className=" bg-cyber-blue px-4 py-2 text-black text-lg font-medium uppercase hover"
                  href={"/"}
                >
                  Learn more
                </Link>
              </div>

              <div className=" w-full flex">
                <ul className=" grow flex justify-around">
                  <li className=" pl-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 01")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/people/Cyberpunk2077_Lucky_number_13_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_Lucky_number_13_RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 01"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>
                    </button>
                  </li>
                  <li className=" pl-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 02")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/people/CyberpunK2077_ Screen_ripperdoc_clinic-RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="CyberpunK2077_ Screen_ripperdoc_clinic-RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 02"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>{" "}
                    </button>
                  </li>
                  <li className=" px-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 03")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/people/Cyberpunk2077_Im_your_fixer_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_Im_your_fixer_RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 03"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {selectedFeature === "Corporations" && (
          <div className=" flex">
            {selectFeaturePicture === "Picture 01" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/corporations/Cyberpunk2077_Different_faces_of_violence_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_Different_faces_of_violence_RGB-en.jpg"
                />
              </div>
            )}
            {selectFeaturePicture === "Picture 02" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/corporations/Cyberpunk2077_Trauma-team_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_Trauma-team_RGB-en.jpg"
                />
              </div>
            )}
            {selectFeaturePicture === "Picture 03" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/corporations/Cyberpunk2077_Mr_Jenkins_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_Mr_Jenkins_RGB-en.jpg"
                />
              </div>
            )}

            <div className=" p-2 basis-2/5 flex flex-col justify-center items-center">
              <div className=" py-4 px-8 flex flex-col justify-center items-center">
                <div className="flex w-full justify-start">
                  <h2 className=" py-4 text-[44px] font-refinery_25 font-bold uppercase">
                    Corporations
                  </h2>
                </div>
                <p className=" py-4 font-blender_pro_book text-[22px] font-normal	leading-[120%]">
                  {" "}
                  The Corporations are giant, transnational companies which
                  dominate the Cyberpunk world. They can range from simple media
                  corporations to worldwide security firms, the only thing you
                  have to remember is that they will kill anyone that stands in
                  their way. The corps in this world are often seen as sovereign
                  nations of themselves, and use their power to change the world
                  around them.
                </p>
                <Link
                  className=" bg-cyber-blue px-4 py-2 text-black text-lg font-medium uppercase hover"
                  href={"/"}
                >
                  Learn more
                </Link>
              </div>

              <div className=" w-full flex">
                <ul className=" grow flex justify-around">
                  <li className=" pl-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 01")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/corporations/Cyberpunk2077_Different_faces_of_violence_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_Different_faces_of_violence_RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 01"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>
                    </button>
                  </li>
                  <li className=" pl-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 02")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/corporations/Cyberpunk2077_Trauma-team_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_Trauma-team_RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 02"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>{" "}
                    </button>
                  </li>
                  <li className=" px-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 03")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/corporations/Cyberpunk2077_Mr_Jenkins_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_Mr_Jenkins_RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 03"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {selectedFeature === "Gangs" && (
          <div className=" flex">
            {selectFeaturePicture === "Picture 01" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/gangs/Cyberpunk2077_What_you_lookin_at_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_What_you_lookin_at_RGB-en.jpg"
                />
              </div>
            )}
            {selectFeaturePicture === "Picture 02" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/gangs/Cyberpunk2077_The_hottest_tech_in_town_RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_The_hottest_tech_in_town_RGB-en.jpg"
                />
              </div>
            )}
            {selectFeaturePicture === "Picture 03" && (
              <div className=" container basis-3/5 static">
                <Image
                  src={
                    "/pictures/features/gangs/Cyberpunk2077-Really_love_what_you_did_with_the_place-RGB-en.jpg"
                  }
                  width={1514}
                  height={851.45}
                  alt="Cyberpunk2077_No_regrets_RGB-en"
                />
              </div>
            )}

            <div className=" p-2 basis-2/5 flex flex-col justify-center items-center">
              <div className=" py-4 px-8 flex flex-col justify-center items-center">
                <div className="flex w-full justify-start">
                  <h2 className=" py-4 text-[44px] font-refinery_25 font-bold uppercase">
                    Gangs
                  </h2>
                </div>
                <p className=" py-4 font-blender_pro_book text-[22px] font-normal	leading-[120%]">
                  By day, the street is the province of corporate movers and
                  commuting beavers. But at night, the predators slither out
                  from under their rocks and trash heaps, and the city howls.
                  Call them gutterats, night crawlers, trash or streetscum; the
                  gangs are the ultimate rulers of the city&apos;s night.
                  Whether it&apos;s a small pack of a dozen, or an army of two
                  hundred, each gang in Night City is as diverse as the street
                  itself; guardians, chromers, dorphers and freaks, all thrown
                  together in a lethal cocktail, mixed and sprinkled liberally
                  with blood.
                </p>
                <Link
                  className=" bg-cyber-blue px-4 py-2 text-black text-lg font-medium uppercase hover"
                  href={"/"}
                >
                  Learn more
                </Link>
              </div>

              <div className=" w-full flex">
                <ul className=" grow flex justify-around">
                  <li className=" pl-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 01")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/gangs/Cyberpunk2077_What_you_lookin_at_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_What_you_lookin_at_RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 01"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>
                    </button>
                  </li>
                  <li className=" pl-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 02")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/gangs/Cyberpunk2077_The_hottest_tech_in_town_RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077_The_hottest_tech_in_town_RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 02"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>{" "}
                    </button>
                  </li>
                  <li className=" px-4 relative">
                    <button
                      onClick={() => setFeaturePicture("Picture 03")}
                      className="relative"
                    >
                      <Image
                        src={
                          "/pictures/features/gangs/Cyberpunk2077-Really_love_what_you_did_with_the_place-RGB-en.jpg"
                        }
                        width={279.66}
                        height={157.3}
                        alt="Cyberpunk2077-Really_love_what_you_did_with_the_place-RGB-en.jpg"
                        className="transition-transform duration-300 transform hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 border-4 transition-border duration-300 hover:border-cyber-blue ${
                          selectFeaturePicture === "Picture 03"
                            ? "border-cyber-blue"
                            : " border-transparent"
                        }`}
                      ></div>{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
