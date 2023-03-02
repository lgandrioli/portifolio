import React, { useState } from "react";
import "./styles.css";
import {BsCaretDownFill} from "react-icons/bs"

function Projects() {
  const [showProject, setShowProject] = useState(false);

  const handleShowProject = () => {
    setShowProject(!showProject);
  };

  return (
    <div className="projects" id="projects">
      <h2 className="projects_container__title">Projetos</h2>
      <div className="projects_container">
        <BsCaretDownFill className="button_container" onClick={handleShowProject}/>
        <img
          src="/assets/Pokedex.svg"
          alt="pokedex"
          className="projects_image"
        />

        <div className="projects_descriptions">
          {showProject && (
            <div className="projects_hover">
              <div className="type_tag">Live Server</div>
              <a href="https://github.com/lgandrioli/Pokedex"  className="type_tag">GitHub</a>
            </div>
          )}

          <h3 className="projects_title">
            PokeApi<label className="type_tag">Front-End</label>
          </h3>
          <p className="projects_text">
            Um site que tem como principal uma Pokedex integrando a api do
            PokeApi que você pode pesquisar um pokemon,filtrar por tipos e
            outras,e como outras funcionalidades,uma loja de items e uma pagina
            de curiosidades utilizando um banco de dados próprio em JSON.
          </p>
          <p className="tags_container">
            <label className="tags">React</label>{" "}
            <label className="tags">React-Router</label>
            <label className="tags">RestFull API</label>
            <label className="tags">JavaScript</label>
            <label className="tags">JSON</label>
            <label className="tags">ImageKit</label>
          </p>
        </div>
      </div>
      <div className="projects_container">
        <div className="commingsoon">
          <label>Comming Soon...</label>
        </div>
        <div className="projects_descriptions">
          <h3 className="projects_title">
            OrganiTime <label className="type_tag">Full-Stack</label>
          </h3>
          <p className="projects_text">
            Aplicativo para gerenciamento de time e projetos para você poder
            organizar sua equipe,familia,grupo da faculdade,etc.. Tem função de
            login para salvar seus times,você pode gerenciar as pessoas do seu
            time,dar cargo a eles e definir funções para cada um em seus
            projetos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
