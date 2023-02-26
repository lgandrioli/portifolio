import React, { useState } from "react";
import {TiThMenu} from "react-icons/ti"
import "./styles.css";


function MenuMobile() {
    const [hamburger,setHamburguer] = useState()

    const handleMenu = () => {
        setHamburguer(!hamburger)
    }
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          const topOffset = section.offsetTop;
          window.scrollTo({
            top: topOffset,
            behavior: 'smooth',
          });
        }
      };

  return (
    <>
    <TiThMenu size={60} className="hamburger" type="button" onClick={handleMenu}/>
    {hamburger && 
      <ul className="navbar_mobile">
        <li className="mobile_item" onClick={() => scrollToSection("about-me")}> About Me</li>
        <li className="mobile_item" onClick={() => scrollToSection("my-technologies")}> Tecnologias</li>
        <li className="mobile_item" onClick={() => scrollToSection("projects")}> Projetos</li>
        <li className="mobile_item" onClick={() => scrollToSection("social")}> Social</li>
      </ul>}

    </>
  );
}

export default MenuMobile;
