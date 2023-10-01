import Image from "next/image";

const Database = () => {
  return (
    <div className=" text-white w-full p-8 flex flex-col">
      <div className=" flex flex-row justify-center items-center p-8 text-cyber-red">
        <h2>Database</h2>
      </div>
      <div className=" flex flex-row">
        <div className=" basis-1/3 border-8 mr-2 border-cyber-yellow flex justify-center items-center">
          Database selector
        </div>
        <div className=" basis-2/3 ml-2 p-8 border-2  border-cyber-red text-cyber-red flex flex-col items-center ">
          <div className=" mb-4">
            <h3>Watson</h3>
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
          <div className=" mt-4 ">
            <p>
              Watson was supposed to be the beating heart of Night City. A few
              decades ago, Japanese zaibatsus invested billions of eurodollars
              in skyscrapers, nightclubs, the Med Center, even industry in the
              northern area - all intended to make the district self-sufficient
              and prosperous. But everything changed when Arasaka returned to
              the city after the Unification War. The corporation steamrolled
              all of its competitors, and without a stable financial sector,
              Watson caved in on itself. Jobs in the Northside Industrial
              District completely evaporated, leaving people out on the street,
              allowing Arasaka to buy up all the now-cheap real estate. Turns
              out, the move was calculated: Arasaka needed port-access. Today
              Watson is one of Night City&apos;s poorest districts, inhabited
              mainly by workers in Northside earning ennies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
