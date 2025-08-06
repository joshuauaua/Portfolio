import "./navbar.css"
import logo from '../assets/logoblack.png'

export default function Navbar() {

  return (

    <>
    <nav className="navbar">

      <img src={logo} alt="Joshua Ng" className="nav-logo" />
      
      <ul className="nav-links">
        <li><a href="/work">Work</a></li>
        <li><a href="/about">About</a></li>
      </ul>

    </nav>
    </>
  )
}