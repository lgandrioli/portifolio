import React from "react";
import "./styles.css";

function AboutMe() {
  return (
    <div className="aboutme" id="about-me">
      <img src="/assets/image.png" alt="garoto de capuz olhando pro espaço" className="myimage" />
      <div className="description">
        <h1 className="description_title">Oi, sou Gustavo Andrioli </h1>
        <span className="description_me">&lt;Front End Developer/&gt;</span>
        <p className="description_text">
          <span className="sections">
            Atualmente estou cursando a faculdade de Análise e Desenvolvimento
            de Sistemas na UNIFIL.
          </span>
          <span className="sections">
            Sou apaixonado por jogos desde os 8 anos, o que me levou a explorar
            ainda mais esse universo e aprender mais sobre programação.
          </span>
          <span className="sections">
            Me encontro estagiando na Esportudo que está sendo um ótimo
            aprendizado em um ambiente de trabalho.
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
