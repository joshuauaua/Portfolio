import "./navbar.css"

export default function Navbar() {

  return (

    <>
    <nav className="navbar">

      <img src="/logoblack.png" alt="Joshua Ng" className="nav-logo" />
      
      <ul className="nav-links">
        <li><a href="/work">Work</a></li>
        <li><a href="/about">About</a></li>
      </ul>

    </nav>
    </>
  )
}