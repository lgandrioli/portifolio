import React from "react";
import "./styles.css";
import { AiFillApi, AiFillFileImage } from "react-icons/ai";
import { DiCss3, DiJavascript, DiReact, DiNodejsSmall } from "react-icons/di";

import { FiFigma } from "react-icons/fi";
import { FaGitAlt } from "react-icons/fa";

function MyTechnologies() {
  return (
    <div className="tecnologies" id="my-technologies">
      <div className="tecnologies_card">
        <h2 className="tecnologies_title">Minhas Tecnologias</h2>
        <ul className="tecnologies_list">
          <li className="tecnologies_item"></li>
          <li className="tecnologies_item">
            <DiCss3 size={80} />
            Styled components
          </li>
          <li className="tecnologies_item">
            <DiJavascript size={80} /> Javascript
          </li>
          <li className="tecnologies_item">
            <DiReact size={80} />
            React
          </li>
          <li className="tecnologies_item">
            <AiFillApi size={80} />
            Conecting Api
          </li>
          <li className="tecnologies_item">
            <FiFigma size={70} />
            Figma
          </li>
          <li className="tecnologies_item">
            <FaGitAlt size={70} />
            Git
          </li>
          <li className="tecnologies_item">
            <DiNodejsSmall size={70} />
            NodeJs
          </li>
          <li className="tecnologies_item">
            <AiFillFileImage size={70} />
            Optimized Images
          </li>
        </ul>
      </div>
      <img src="/assets/Computer.png" alt="merry" className="tecnologies_image" />
    </div>
  );
}

export default MyTechnologies;
