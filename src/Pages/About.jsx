import React from 'react';
import '../styles/Components/about.scss';
import Image from '../Assets/Images/Frame 2.png';

export default function About() {
  return (
    <section className="container-about">
      <div className="texts">
        <h1>Sobre.</h1>
        <p>
          Olá! Meu nome é Valdir Castro, sou desenvolvedor frontend. Apaixonado por
          criar interfaces que ganham vida na internet.
          {' '}
          <br />
          <br />
          Minhas principais ferramentas são:
          {' '}
          <span> React.js, Javascript, Styled Components e SASS.</span>
          <br />
          <br />
          Possuo conhecimento básico também nas seguintes linguagens:
          {' '}
          <span>Next.js, Typescript, C, C++ e PostgreSQL.</span>
        </p>
      </div>
      <div className="photo">
        <img src={Image} alt="Logo" />
      </div>
    </section>
  );
}
