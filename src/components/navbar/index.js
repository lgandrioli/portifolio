import React, { useEffect, useState } from "react";
import MenuMobile from "../menuMobile";
import "./styles.css";

function NavBar() {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY < 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const [snippets, setSnippets] = useState({
    aboutMe: false,
    myTechnologies: false,
    projects: false,
    social: false,
  });

  const showSnippets = (item) => {
    setSnippets((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

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
  //colocar as outras ids [projects,socials] nos components
  return (
    <>
      {show && (
        <div className="navbar">
          <div className="navbar_logo">lgandrioli</div>
          <ul className="navbar_list">
            <li
              className="navbar_item"
              onMouseOver={() => showSnippets("aboutMe")}
              onMouseLeave={() => showSnippets("aboutMe")}
              onClick={() => scrollToSection("about-me")}
            >
              {snippets.aboutMe && "["} About Me {snippets.aboutMe && "]"}
            </li>
            <li
              className="navbar_item"
              onMouseOver={() => showSnippets("myTechnologies")}
              onMouseLeave={() => showSnippets("myTechnologies")}
              onClick={() => scrollToSection("my-technologies")}
            >
              {snippets.myTechnologies && "["} My Tecnologies{" "}
              {snippets.myTechnologies && "]"}
            </li>
            <li
              className="navbar_item"
              onMouseOver={() => showSnippets("projects")}
              onMouseLeave={() => showSnippets("projects")}
              onClick={() => scrollToSection("projects")}
            >
              {snippets.projects && "["} Projects {snippets.projects && "]"}
            </li>
            <li
              className="navbar_item"
              onMouseOver={() => showSnippets("social")}
              onMouseLeave={() => showSnippets("social")}
              onClick={() => scrollToSection("social")}
            >
              {snippets.social && "["} Social {snippets.social && "]"}
            </li>
          </ul>
          <MenuMobile />
        </div>
      )}
    </>
  );
}

export default NavBar;
