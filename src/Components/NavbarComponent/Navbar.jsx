 import { slide as Menu } from "react-burger-menu";
 import{useState } from 'react';
import Phone from "../../Assets/Logo/phone.png";
import Logo from "../../Assets/Logo/logo.png";
import HZV from "../../Assets/Logo/hzv.png";
import Home from "../../Assets/Logo/home.png";
import Service from "../../Assets/Logo/service.png";
import Kontakt from "../../Assets/Logo/kontakt.png";
import "./Navbar.css";

export const NavbarComponent = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="nummer__praxis">
        <img src={Phone} alt="Phone" width={30} />
        <span>(06201) 62581</span>
      </div>

      <div className="container">
        <nav className="nav__box">
          <div className="logo">
            <img src={Logo} alt="Logo" width={180} />
          </div>

          {/* Desktop Navigation */}
          <div className="nav__list">
            <ul>
              <li><img src={Home} alt="Home" width={30} />Startseite</li>
              <li><img src={HZV} alt="HZV" width={30} />HZV</li>
              <li><img src={Service} alt="Service" width={40} />Leistungen</li>
              <li><img src={Kontakt} alt="Kontakt" width={30} />Kontakt</li>
            </ul>
          </div>

          {/* Mobile Burger Menu */}
          <div className="burger__menu">
            <Menu
            right
            width="100%"
            isOpen={isMenuOpen}
            onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
            styles={{
              bmMenu: {
                boxShadow: '10px 30px 120px rgba(0, 0, 0, 0.3)',
                zIndex: 1000,
              },
            }}
          >
              <a className="menu-item" href="#startseite">
                <img src={Home} alt="Home" width={35} /> Startseite
              </a>
              <a className="menu-item" href="#hzv">
                <img src={HZV} alt="HZV" width={30} /> HZV
              </a>
              <a className="menu-item" href="#leistungen">
                <img src={Service} alt="Service" width={30} /> Leistungen
              </a>
              <a className="menu-item" href="#kontakt">
                <img src={Kontakt} alt="Kontakt" width={30} /> Kontakt
              </a>
            </Menu>
          </div>
        </nav>
      </div>
    </div>
  );
};
