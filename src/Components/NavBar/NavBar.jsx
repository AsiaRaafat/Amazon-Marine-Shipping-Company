import "./NavBar.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useState,useEffect } from "react";
import { FiMapPin } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import ChangeLang from "../changelang/ChangeLang";
import { useTranslation } from "react-i18next";


function NavBar() {
  
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation("global");
  const userLanguage = localStorage.getItem("lang");

  var arabicStyle = {
    padding:'0px 0px 0px 0px',
  };

  const englishStyle = {
    textAlign: 'left',
  };

  
  

  const currentStyle = userLanguage === 'ar' ? arabicStyle : englishStyle;
  
  

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
            


     return(
      <Navbar expand="lg" className={`navbar fixed-top ${isScrolled ? 'scrolled' : ''}`}   style={currentStyle}  >
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex">
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
             <NavLink to="/">
                <img src={logo} alt="logo" className={`logo-img ${userLanguage === "ar" ? "logo-ar" : ""}`}  />
             </NavLink>
            </li>
          </ul>

          <div className="d-flex">
             <div className="icon"  >
                <FiMapPin/>
                <p className={`p1 ${userLanguage === "ar" ? "navarabicstyle" : ""}`} >
                  {/* Tracking */}
                <a className="a1"  href="https://maps.app.goo.gl/2JK74HvFDUaBeyaB9" target="_blank" > 
                {t("text.Tracking")}
                </a>
                </p>
            </div>
            <div className="icon"  >
             <TfiWorld/>
             <ChangeLang/>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
    }
  export default NavBar;
  