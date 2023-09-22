
const Header = () => {
  return (
    <header>
    <nav className=" text-cyber-blue p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/night-city">Night City</a>
        </li>
        <li>
          <a href="/corporations">Corporations</a>
        </li>
        <li>
          <a href="/gangs">Gangs</a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header