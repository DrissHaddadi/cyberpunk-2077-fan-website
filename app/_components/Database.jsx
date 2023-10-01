"use client";
import { useState } from "react";
import Image from "next/image";

const Database = () => {
  const [databaseEntry, setDatabaseEntry] = useState("Night City");

  return (
    <div className=" text-white w-full p-8 flex flex-col">
      <div className=" flex flex-row justify-center items-center p-8 text-cyber-red">
        <h2 className=" font-play_regular text-5xl">Database</h2>
      </div>
      <div className=" flex flex-row">
        <div className=" basis-1/3 border-8 mr-2 border-cyber-yellow">
          <ul className=" p-4 w-full">
            <li>
              <button onClick={() => setDatabaseEntry("Night City")}>
                Night City
              </button>
            </li>
            <li className=" bg-slate-700 ">
              <button onClick={() => setDatabaseEntry("City Center")}>
                City Center
              </button>
            </li>
            <li className=" bg-zinc-600">
              <button onClick={() => setDatabaseEntry("Heywood")}>
                Heywood
              </button>
            </li>
            <li>
              <button onClick={() => setDatabaseEntry("Pacifica")}>
                Pacifica
              </button>
            </li>
            <li>
              <button onClick={() => setDatabaseEntry("Santo Domingo")}>
                Santo Domingo
              </button>
            </li>
            <li>
              <button onClick={() => setDatabaseEntry("Watson")}>Watson</button>
            </li>
            <li>
              <button onClick={() => setDatabaseEntry("Westbrook")}>
                Westbrook
              </button>
            </li>
            <li>
              <button onClick={() => setDatabaseEntry("Dogtown")}>
                Dogtown
              </button>
            </li>
            <li>
              <button onClick={() => setDatabaseEntry("Badlands")}>
                Badlands
              </button>
            </li>
          </ul>
        </div>
        <div className=" basis-2/3 ml-2 p-8 border-2  border-cyber-red text-cyber-red flex flex-col items-center ">
          {databaseEntry === "Night City" && (
            <div>
              <div className=" mb-4">
                <h3 className=" font-play_regular text-2xl leading-[42px]">
                  Night CIty
                </h3>
              </div>
              <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                <Image
                  src={
                    "/pictures/encyclopedia/night-city/Night_City_Database_CP2077.webp"
                  }
                  width={1860}
                  height={609}
                  alt="Night_City_Database_CP2077.webp"
                />
              </div>
              <div className=" mt-4">
                <p className=" font-play_regular text-base leading-7">
                  The City of Dreams was founded in the 1990s by visionary
                  industrialist Richard Night. When the world of late 20th
                  century plunged into chaos, Night envisioned a modern
                  metropolis free from crime, poverty and corruption. Corporate
                  partners Arasaka, EBM, and Petrochem helped him realize this
                  vision, investing in the foundation of what would become the
                  Free City of Night City. The city would develop into a haven
                  for young idealists and a beacon for others who sought to
                  fulfill their own dreams. And although Richard fell to
                  assassins and many new generations seeking fame, fortune and
                  freedom have suffered their own series of setbacks, the
                  city&apos;s legendary status endures today.
                  <br />
                  <br />
                  Night City has it all: from the monumental skyscrapers of
                  industry-leading megacorporations, to the luxury villas of
                  world-renowned stars, to the lawless neighborhoods where war
                  is waged every day. You will stumble across mercenaries, gangs
                  and famous rockers, but also junkies, bums and even
                  cyberpsychos. You will stand in the shadows of colossal
                  megabuildings and get lost in the maze of streets, alleys and
                  markets. You will make your dreams come true or die trying.
                </p>
              </div>
            </div>
          )}

          {databaseEntry === "City Center" && (
            <div>
              <div className=" mb-4">
                <h3 className=" font-play_regular text-2xl leading-[42px]">
                  City Center
                </h3>
              </div>
              <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                <Image
                  src={
                    "/pictures/encyclopedia/night-city/CityCenter_Database_CP2077.webp"
                  }
                  width={1860}
                  height={609}
                  alt="CityCenter_Database_CP2077.webp"
                />
              </div>
              <div className=" mt-4">
                <p className=" font-play_regular text-base leading-7">
                  If you stand in the middle of Corpo Plaza and observe
                  what&apos;s around you - all the breathtaking megabuildings,
                  office blocks, bars, clubs, architectural wonders and dazzling
                  neon signs - it&apos;s hard to believe that only a few decades
                  ago the area looked like a smoldering battlefield in the
                  aftermath of the 4th Corporate War and the nuclear attack on
                  Arasaka Tower. As anyone with a pair of optics can see, City
                  Center was fully rebuilt, surpassing even its former glory
                  with more modern and cutting-edge architecture. It serves one
                  purpose, and one purpose only - to flaunt the city&apos;s
                  economic power and prove that Night City is freer than ever
                  before.
                </p>
              </div>
            </div>
          )}

          {databaseEntry === "Heywood" && (
            <div>
              <div className=" mb-4">
                <h3 className=" font-play_regular text-2xl leading-[42px]">
                  Heywood
                </h3>
              </div>
              <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                <Image
                  src={
                    "/pictures/encyclopedia/night-city/Heywood_Database_CP2077.webp"
                  }
                  width={1860}
                  height={609}
                  alt="Heywood_Database_CP2077.webp"
                />
              </div>
              <div className=" mt-4">
                <p className=" font-play_regular text-base leading-7">
                  Heywood is a district of contradictions. The northern part
                  that borders the City Center is modern and well-kept, proud of
                  its stunning megabuildings, parks, and places that are open to
                  the public. But all you have to is go a few blocks southeast
                  and the scenery starts to change dramatically. This part of
                  Heywood is much poorer and more dangerous. The buildings are
                  smaller and the streets are controlled by the Valentinos and
                  the 6th Street Gang. If you know your place and keep your head
                  down, Heywood isn&apos;t really so bad. After all, it&apos;s
                  where most of Night City sleeps. If you&apos;re not a corpo
                  and you score an apartment in the richer part of the district,
                  then you&apos;ve just won the lottery. Otherwise, just be
                  happy you live in Heywood. In Night City, things could always
                  be worse.
                </p>
              </div>
            </div>
          )}

          {databaseEntry === "Pacifica" && (
            <div>
              <div className=" mb-4">
                <h3 className=" font-play_regular text-2xl leading-[42px]">
                  Pacifica
                </h3>
              </div>
              <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                <Image
                  src={
                    "/pictures/encyclopedia/night-city/Pacifica_Database_CP2077.webp"
                  }
                  width={1860}
                  height={609}
                  alt="Pacifica_Database_CP2077.webp"
                />
              </div>
              <div className=" mt-4">
                <p className=" font-play_regular text-base leading-7">
                  You could say that Pacifica is almost a microcosm of Night
                  City&apos;s history. It started with, &quot;We&apos;re
                  building a paradise,&quot; and ended with &quot;Dear God, what
                  a nightmare.&quot; On paper it was meant to be the classiest
                  and most iconic district catering to corporate employees -
                  Night City&apos;s take on Las Vegas in its heyday. Luxury
                  hotels, entertainment halls, sandy beaches... sadly, that
                  Pacifica only existed in the blueprints drawn up by architects
                  for fat-cat investors. Those same investors pulled out every
                  last enny after the Unification War broke out, fearing yet
                  another inter-corporate conflict. <br /> <br />
                  Pacifica was abandoned by all but the local Haitian community,
                  led by a gang of netrunners called the Voodoo Boys. The city
                  has repeatedly tried and failed to bring the district back
                  into the fold, but it remains isolated, with its own rules,
                  language, manufactured goods (illegal in Night City) and
                  independent Net. You could say that that Pacifica has
                  blossomed under the Voodoo Boys&apos; leadership, but poison
                  oak would be a more suitable metaphor. To anyone who enters -
                  beware.
                </p>
              </div>
            </div>
          )}

          {databaseEntry === "Santo Domingo" && (
            <div>
              <div className=" mb-4">
                <h3 className=" font-play_regular text-2xl leading-[42px]">
                  Santo Domingo
                </h3>
              </div>
              <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                <Image
                  src={
                    "/pictures/encyclopedia/night-city/SantoDomingo_Database_CP2077.webp"
                  }
                  width={1860}
                  height={609}
                  alt="SantoDomingo_Database_CP2077.webp"
                />
              </div>
              <div className=" mt-4">
                <p className=" font-play_regular text-base leading-7">
                  Santo Domingo is one of Night City&apos;s oldest districts.
                  Luckily, its location meant it avoided the worst damage from
                  the 4th Corporate War, though the tens of thousands of Night
                  Citizens deprived of their homes still built provisional camps
                  and settlements. Today, no trace of them remains - Santo
                  Domingo has instead become an industrial hub with an abundance
                  of enterprises and manufacturing and power plants.
                  Corporations are in constant battle over influence in the
                  district - real estate changes hands, new businesses pop up
                  and old businesses fall. Meanwhile, construction sites are
                  guarded by combat troops guarding corporate property and
                  secrets, though often they serve as law enforcement in cases
                  when a company shuts down and fires all its staff (mostly
                  around Rancho Coronado), raising the risk of riots.
                </p>
              </div>
            </div>
          )}

          {databaseEntry === "Watson" && (
            <div>
              <div className=" mb-4">
                <h3 className=" font-play_regular text-2xl leading-[42px]">
                  Watson
                </h3>
              </div>
              <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                <Image
                  src={
                    "/pictures/encyclopedia/night-city/Watson_Database_CP2077.webp"
                  }
                  width={1860}
                  height={609}
                  alt="Watson_Database_CP2077.webp"
                />
              </div>
              <div className=" mt-4">
                <p className=" font-play_regular text-base leading-7">
                  Watson was supposed to be the beating heart of Night City. A
                  few decades ago, Japanese zaibatsus invested billions of
                  eurodollars in skyscrapers, nightclubs, the Med Center, even
                  industry in the northern area - all intended to make the
                  district self-sufficient and prosperous. But everything
                  changed when Arasaka returned to the city after the
                  Unification War. The corporation steamrolled all of its
                  competitors, and without a stable financial sector, Watson
                  caved in on itself. Jobs in the Northside Industrial District
                  completely evaporated, leaving people out on the street,
                  allowing Arasaka to buy up all the now-cheap real estate.
                  Turns out, the move was calculated: Arasaka needed
                  port-access. Today Watson is one of Night City&apos;s poorest
                  districts, inhabited mainly by workers in Northside earning
                  ennies.
                </p>
              </div>
            </div>
          )}

          {databaseEntry === "Westbrook" && (
            <div>
              <div className=" mb-4">
                <h3 className=" font-play_regular text-2xl leading-[42px]">
                  Westbrook
                </h3>
              </div>
              <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                <Image
                  src={
                    "/pictures/encyclopedia/night-city/Westbrook_Database_CP2077.webp"
                  }
                  width={1860}
                  height={609}
                  alt="Westbrook_Database_CP2077.webp"
                />
              </div>
              <div className=" mt-4">
                <p className=" font-play_regular text-base leading-7">
                  A fair amount of Night Citizens firmly believe that Westbrook
                  is the best district to live in. After all, that&apos;s where
                  all the richest and most influential people of Night City
                  live, including the picturesquely situated North Oak -
                  probably the most beautiful neighborhood in the city. Charter
                  Hill has its charm, too - home to ambitious and enterprising
                  corpos who are about halfway up their career ladder. Last but
                  not least, Japantown is widely known as Night City&apos;s
                  party district. Yes indeed, Westbrook is where everyone wants
                  to be. But it wasn&apos;t always like that. Over fifty years
                  ago, after the nuclear attack on Arasaka in 2023, the part of
                  Westbrook next to City Center sustained serious damage. The
                  bomb&apos;s earthquake completely wiped out Japantown&apos;s
                  high-rises, leaving behind ghostly, crooked skeletons looming
                  over the district for the next two decades. Charter Hill was
                  inundated with refugees - even North Oak saw ramshackle huts
                  and tents hastily put up on its slopes. Luckily, by the 40s,
                  the great restoration of Night City was already underway - the
                  ruins of megabuildings were removed, replaced by shiny
                  monoliths from predominantly Asian corporations, returning
                  Japantown to its former glory. Charter Hill was also cleaned
                  up and soon saw new homes for corpo employees. The refugee and
                  homeless encampments in North Oak lasted for much longer,
                  remaining a sore sight for the city&apos;s authorities. Crime
                  levels there beat the city&apos;s records - for a time even
                  soaring above those of the Combat Zone. Eventually the area
                  was brought to order with the help of mercenaries, and shortly
                  after it became the North Oak we know today - the most
                  exclusive and secure area of Night City.
                </p>
              </div>
            </div>
          )}

          {databaseEntry === "Dogtown" && (
            <div>
              <div className=" mb-4">
                <h3 className=" font-play_regular text-2xl leading-[42px]">
                  Dogtown
                </h3>
              </div>
              <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                <Image
                  src={
                    "/pictures/encyclopedia/night-city/Dogtown_Database_CP2077.webp"
                  }
                  width={1860}
                  height={609}
                  alt="Dogtown_Database_CP2077.webp"
                />
              </div>
              <div className=" mt-4">
                <p className=" font-play_regular text-base leading-7">
                  In the 2020s Militech established a secret, experimental
                  military project in this part of Pacifica, constructing
                  bunkers and laboratories cleverly hidden beneath urban
                  infrastructure. Nearly half a century later, a group of
                  investors appeared, unaware they were building on the remains
                  of an old military complex. When a lab was excavated at one of
                  the construction sites, the investors were forced out of
                  Pacifica and Militech erected a wall around the neighborhood
                  ostensibly due to gas leaks, bad documentation on local
                  developments and unexploded ordnance from the 4th Corporate
                  War. <br />
                  <br />
                  In 2077, Dogtown has become a kind of city within a city,
                  walled off from the rest of Night with designated points of
                  entry manned by Kurt Hansen&apos;s
                  Militech-commandos-turned-militia-soldiers. On the strees one
                  can still see the remnants of Pacifica&apos;s never-completed
                  redevelopment - luxury hotels, swimming pools, dazzlingly
                  sumptuous mansions: once destined for glory, now a dilapadated
                  mess. Machinery abandoned by construction workers is also
                  present and many of the buildings are nothing more than
                  crumbling, vacant husks. <br />
                  <br />
                  The NCPD is forbidden to enter Dogtown proper, while Trauma
                  Team rarely ventures inside due to the increased risk and the
                  fact that hardly anyone in Dogtown has TT insurance. True
                  enough, Hansen&apos;s people serve as local law enforcement,
                  but are far from what one would call &quot;police
                  officers&quot;. Maybe they&apos;ll help, maybe they won&apos;t
                  - their primary concern is making sure the neighborhood
                  doesn&apos;t descend into total anarchy. Small local squabbles
                  and conflicts? Not worth their precious time. <br />
                  <br />
                  So who lives in Dogtown? Mostly those on the run from corps,
                  gangs, or the NCPD. But there are also just ordinary people -
                  those pushed beyond the margins of society in Night City who
                  were brave or desperate enough to try their luck here.
                </p>
              </div>
            </div>
          )}

          {databaseEntry === "Badlands" && (
            <div>
              <div className=" mb-4">
                <h3 className=" font-play_regular text-2xl leading-[42px]">
                  Badlands
                </h3>
              </div>
              <div className="flex flex-col justify-center border-y-2 border-cyber-red-dark py-4">
                <Image
                  src={
                    "/pictures/encyclopedia/night-city/TheBadlands_Database_CP2077.webp"
                  }
                  width={1860}
                  height={609}
                  alt="TheBadlands_Database_CP2077.webp"
                />
              </div>
              <div className=" mt-4">
                <p className=" font-play_regular text-base leading-7">
                  If you think Night City is dangerous, just wait &apos;till you
                  get to the Badlands. <br />
                  <br />
                  The areas bordering the city to the east and south are
                  actually eight different zones that vary in character and
                  landscape. There&apos;s the trailer park of Red Peaks, the
                  plains of Rocky Ridge, and the desert of Sierra Sonora
                  stretching out to the east, whose landfill emits a stench
                  that&apos;s often blown all the way into the city. Saturated
                  with chemicals and acid rain, nothing will ever grow again in
                  this region of the Badlands. Anyone who has to cross this area
                  does it quickly, and if they&apos;re smart, with an armed
                  escort in case they run into Wraiths - a gang made up of
                  exiled nomads. You could compare them to vultures, though at
                  least vultures have the decency to wait until their prey is
                  dead. <br />
                  <br />
                  The south paints a much less apocalyptic picture with
                  Biotechnica&apos;s protein farms and the Jackson Plains power
                  plant. A trip to the neighboring lake of Laguna Bend at sunset
                  is the most picturesque view the Badlands has to offer (just
                  make sure you don&apos;t touch the water). <br />
                  <br />
                  There&apos;s a saying that everyone should visit the Badlands
                  at least once in their lives. Sounds like something the
                  Wraiths would say.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Database;
