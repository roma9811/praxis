 import React from 'react';
import { slide as BurgerMenu } from "react-burger-menu";
import Logo from "../../Assets/Logo/logo.png";
import Notfall from "../../Assets/Logo/notfall.png";
import Home from "../../Assets/Logo/home.png";
import Service from "../../Assets/Logo/service.png";
import Kontakt from "../../Assets/Logo/kontakt.png";
import VorsorgeImg from "../../Assets/Logo/vorsorge.png";
import Check from "../../Assets/Logo/check.png";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { motion, AnimatePresence } from 'framer-motion';

 
 
export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const scrollToTop = React.useCallback(() => {
    const candidates = [
      document.scrollingElement,
      document.documentElement,
      document.body,
      document.getElementById('root'),
      document.querySelector('main'),
      document.querySelector('.app'),
      document.querySelector('.page'),
      document.querySelector('.container'), 
    ].filter(Boolean);

    candidates.forEach((el) => {
      if ('scrollTo' in el) {
        el.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        el.scrollTop = 0;
      }
    });
  }, []);

  React.useEffect(() => {
    requestAnimationFrame(() => scrollToTop());
  }, [location.pathname, scrollToTop]);

  return (
    <div className="navbar">
      <div className="container">
        <nav className="nav__box">
          <div className="logo">
            <Button
              className="nav-button"
              component={Link}
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
                requestAnimationFrame(() => scrollToTop());
              }}
              sx={{ padding: 0, minWidth: 'auto' }}
            >
              <img src={Logo} alt="Logo" width={180} />
            </Button>
          </div>

          {/* Десктоп-меню */}
          <div className="nav__list">
            <ul style={{ display: 'flex', gap: '5rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li className='nav_list'>
                <Button
                  component={Link}
                  to="/"
                  onClick={() => {
                    setIsMenuOpen(false);
                    requestAnimationFrame(() => scrollToTop());
                  }}
                  startIcon={<img src={Home} alt="Home" width={30} />}
                >
                  Startseite
                </Button>
              </li>

              <li>
                <PopupState variant="popover" popupId="leistungen-menu">
                  {(popupState) => (
                    <>
                      <Button
                        {...bindTrigger(popupState)}
                        startIcon={<img src={Service} alt="Service" width={30} />}
                      >
                        Leistungen
                      </Button>
                      <Menu {...bindMenu(popupState)} disableScrollLock>
                        <MenuItem className='menu__leistungen'
                          component={Link}
                          to="/vorsorge"
                          onClick={() => {
                            popupState.close();
                            setIsMenuOpen(false);
                          }}
                        >
                          <li className="vorsorge__btn"><img src={VorsorgeImg} alt="" width={30}/>Vorsorge</li>
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/untersuchungen"
                          onClick={() => {
                            popupState.close();
                            setIsMenuOpen(false);
                          }}
                        >
                          <li className="untersuchung__btn"><img src={Check} alt="" width={30}/>Untersuchungen</li>
                        </MenuItem>
                      </Menu>
                    </>
                  )}
                </PopupState>
              </li>

              <li>
                <Button
                  component={Link}
                  to="/kontakt"
                  onClick={() => setIsMenuOpen(false)}
                  startIcon={<img src={Kontakt} alt="Kontakt" width={30} />}
                >
                  Kontakt
                </Button>
              </li>

              <li>
                <Button
                  component={Link}
                  to="/notfall"
                  onClick={() => setIsMenuOpen(false)}
                  startIcon={<img src={Notfall} alt="Notfall" width={30} />}
                >
                  Notfall
                </Button>
              </li>
            </ul>
          </div>
<div className="burger__menu">
  <BurgerMenu
    right
    width="100%"
    isOpen={isMenuOpen}
    onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
    styles={{
      bmMenu: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      },
      bmItemList: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      },
    }}
  >
    <div className="burger__box">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Startseite */}
              <motion.li
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -250 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                style={{ marginBottom: '15px' }}
              >
                <Link
                  to="/"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => scrollToTop(), 0);
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}
                >
                  <img src={Home} alt="Startseite" width={30} />
                  Startseite
                </Link>
              </motion.li>

              {/* Kontakt */}
              <motion.li
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -250 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                style={{ marginBottom: '15px' }}
              >
                <Link
                  to="/kontakt"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}
                >
                  <img src={Kontakt} alt="Kontakt" width={30} />
                  Kontakt
                </Link>
              </motion.li>

            
              {/* Vorsorge */}
              <motion.li
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -250 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                style={{ marginBottom: '15px' }}
              >
                <Link
                  to="/vorsorge"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}
                >
                  <img src={VorsorgeImg} alt="Vorsorge" width={30} />
                  Vorsorge
                </Link>
              </motion.li>

              {/* Untersuchungen */}
              <motion.li
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -250 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                style={{ marginBottom: '15px' }}
              >
                <Link
                  to="/untersuchungen"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}
                >
                  <img src={Check} alt="Untersuchungen" width={30} />
                  Untersuchungen
                </Link>
              </motion.li>
                {/* Notfall */}
              <motion.li
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -250 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                style={{ marginBottom: '15px' }}
              >
                <Link
                  to="/notfall"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}
                >
                  <img src={Notfall} alt="Notfall" width={30} />
                  Notfall
                </Link>
              </motion.li>

            </>
          )}
        </AnimatePresence>
      </ul>
    </div>
  </BurgerMenu>
</div>

        </nav>
      </div>
    </div>
  );
};
