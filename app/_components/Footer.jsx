const Footer = () => {
  return (
    <footer>
      <div className="flex justify-around py-8 text-white font-blender_pro_book font-normal leading-[120%]">
        <div className=" p-4 flex flex-col justify-start items-center">
          <h3 className="text-xl ">Credits</h3>
          <div className=" grow flex flex-col justify-center items-center">
            <p>Web app created by Driss Haddadi</p>
            <p>This is an unofficial website</p>
            <p>Media content belongs to CD PROJEKT RED</p>
            <p>
              <a
                href="https://www.cyberpunk.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyber-blue"
              >
                Official Cyberpunk 2077 website
              </a>
            </p>
          </div>
        </div>
        <div className=" p-4 flex flex-col justify-start items-center">
          <h3 className="text-xl ">Technologies used</h3>
          <div className=" grow flex flex-col justify-center items-center">
            <p>React.JS, Next.JS, Tailwind CSS, Node.Js, MongoDB</p>
          </div>
        </div>
        <div className=" p-4 flex flex-col justify-start items-center">
          <h3 className="text-xl ">Contact me</h3>
          <div className=" grow flex flex-col justify-center items-center">
            <p>
              <a
                href="https://github.com/DrissHaddadi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyber-blue"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/driss-haddadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyber-blue"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
