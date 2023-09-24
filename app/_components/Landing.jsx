import Link from "next/link";

const Landing = () => {
  return (
    <div className=" bg-cyber-yellow p-8">
      <div className=" container flex flex-col justify-center items-center">
        <h2 className=" py-4 text-xl font-medium uppercase">Night City</h2>
        <p className=" py-4">
          The Free City of Night City is an autonomous city located on the
          border between North and South California, on the Pacific coast of
          North America. It is considered a modern multicultural metropolis of
          the 21st-century, overrun by corporations, corruption, organized crime
          and gang violence. Night City was established at the head of Del
          Coronado Bay in 1994. Founded by Richard Night, it was originally
          known as Coronado City before its renaming in 1998.
        </p>
        <Link
          className=" bg-cyber-blue px-4 py-2 text-lg font-medium uppercase"
          href={"/"}
        >
          Learn more
        </Link>
      </div>
      <div className=" container flex flex-col justify-center items-center">
        <h2 className=" py-4 text-xl font-medium uppercase">People</h2>
        <p className=" py-4">
          Meet a host of memorable characters, from rockerboy rebel Johnny
          Silverhand to a variety of fixers, friends, and enemies — all of whom
          have their own agenda
        </p>
        <Link
          className=" bg-cyber-blue px-4 py-2 text-lg font-medium uppercase"
          href={"/"}
        >
          Learn more
        </Link>
      </div>
      <div className=" container flex flex-col justify-center items-center">
        <h2 className=" py-4 text-xl font-medium uppercase">Corporations</h2>
        <p className=" py-4">
          The Corporations are giant, transnational companies which dominate the
          Cyberpunk world. They can range from simple media corporations to
          worldwide security firms, the only thing you have to remember is that
          they will kill anyone that stands in their way. The corps in this
          world are often seen as sovereign nations of themselves, and use their
          power to change the world around them.
        </p>
        <Link
          className=" bg-cyber-blue px-4 py-2 text-lg font-medium uppercase"
          href={"/"}
        >
          Learn more
        </Link>
      </div>
      <div className=" container flex flex-col justify-center items-center">
        <h2 className=" py-4 text-xl font-medium uppercase">Gangs</h2>
        <p className=" py-4">
          By day, the street is the province of corporate movers and commuting
          beavers. But at night, the predators slither out from under their
          rocks and trash heaps, and the city howls. Call them gutterats, night
          crawlers, trash or streetscum; the gangs are the ultimate rulers of
          the city&apos;s night. Whether it&apos;s a small pack of a dozen, or
          an army of two hundred, each gang in Night City is as diverse as the
          street itself; guardians, chromers, dorphers and freaks, all thrown
          together in a lethal cocktail, mixed and sprinkled liberally with
          blood.
        </p>
        <Link
          className=" bg-cyber-blue px-4 py-2 text-lg font-medium uppercase"
          href={"/"}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Landing;
