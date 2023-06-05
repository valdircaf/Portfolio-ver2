import React, { useContext } from 'react';
import '../styles/Components/home.scss';
import Logo from './Components/Logo/Logo';
import Menu from './Components/Menu/Menu';
import About from './About';
import Projects from './Projects';
import { NewContext } from '../contexts/Context';

export default function Home() {
  const { isActiveMenu, isActiveAbout, isActiveProjects } = useContext(NewContext);

  return (
    <section>
      <section className="logo">
        <Logo />
      </section>
      <section className={isActiveMenu ? 'menu' : 'hide'}>
        <Menu />
      </section>
      <section className={isActiveAbout ? 'about' : 'hide'}>
        <About />
      </section>
      <section className={isActiveProjects ? 'projects' : 'hide'}>
        <Projects />
      </section>
    </section>
  );
}
