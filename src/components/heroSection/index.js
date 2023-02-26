import React from "react";
import "./styles.css";

function AboutMe() {
  return (
    <div className="aboutme" id="about-me">
      <img src="/assets/luffy.jpeg" alt="luffy" className="myimage" />
      <div className="description">
        <h1 className="description_title">Oi sou Gustavo Andrioli </h1>
        <span className="description_me">Front End Developer</span>
        <p className="description_text">
          <span className="sections">
            sou uma pessoa bastante dedicada e interessada em tecnologia,
            atualmente estou cursando a faculdade de Análise e Desenvolvimento
            de Sistemas na UNIFIL.
          </span>
          <span className="sections">
            Sou apaixonado por jogos desde os 8 anos, o que me levou a explorar ainda
            mais esse universo e aprender mais sobre programação.
          </span>
          <span className="sections">
            Atualmente, estou estagiando na Esportudo, o que está me permitindo
            aplicar meus conhecimentos teóricos em um ambiente de trabalho real
            e ver o quanto eu ainda sou pequeno comparado ao que quero atingir
            na minha carreira profissional e isso me motiva muito.
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
