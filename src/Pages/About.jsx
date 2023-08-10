import React, { useEffect, useState } from 'react';
import '../styles/Components/about.scss';
// import Typical from 'react-typical';
import { useInView } from 'react-intersection-observer';
import Typical from 'react-typical';
import Navbar from './Components/Navbar/Navbar';

export default function About() {
  const [isVisibleH2, setVisibleH2] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setVisibleH2(true);
      }, 22000);
    }
  }, [inView === true]);

  return (
    <section className="container-about" ref={ref}>
      <section className="navbar">
        <Navbar />
      </section>
      <section className="all">
        <p>
          Microsoft Windows [versão 10.0.19045.3086]
          <br />
          C/Users/Valdir
        </p>
        <section className="texts">
          <p>
            {inView ? (
              <Typical
                wrapper="p"
                loop={1}
                steps={[
                  'Olá! Me chamo Valdir Castro.',
                  500,
                  'Sou Desenvolvedor Frontend com habilidade nas principais tecnologias utilizadas na área atualmente.',
                  2000,
                  'Abaixo você pode conferir mais sobre minhas skills.',
                  3000,
                ]}
              />
            ) : ''}
          </p>
          <h2 className={isVisibleH2 ? 'show' : 'hide'}>
            Principais skills:
            <span>
              {' '}
              React.js, Javascript, Styled Components e SCSS, Design UI.
            </span>
          </h2>
          <h3 className={isVisibleH2 ? 'show' : 'hide'}>
            Skills secundárias:
            <span> Typescript, Next.js, PostgreSQL</span>
          </h3>
          <h4 className={isVisibleH2 ? 'show' : 'hide'}>
            Inglês nível
            <span> B2</span>
            <br />
            Português
            <span> Nativo</span>
          </h4>
          <h5 className={isVisibleH2 ? 'show' : 'hide'}>
            Sei o básico:
            <span> Java, C e C++, Angular 9+</span>
          </h5>
        </section>
      </section>
    </section>
  );
}
