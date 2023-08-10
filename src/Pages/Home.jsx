import React, { useContext } from 'react';
import '../styles/Components/home.scss';
import Logo from './Components/Logo/Logo';
import Menu from './Components/Menu/Menu';
import About from './About';
import Projects from './Projects';
import { NewContext } from '../contexts/Context';

export default function Home() {
  const {
    isActiveMenu, isActiveAbout, isActiveProjects, isActiveLogo,
  } = useContext(NewContext);

  return (
    <section>
      <section className={isActiveLogo ? 'logo' : 'hide'}>
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
