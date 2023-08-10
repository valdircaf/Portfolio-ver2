import React, { useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/Components/menu.scss';
import { NewContext } from '../../../contexts/Context';

export default function Menu() {
  const firstLink = useRef();
  const secondLink = useRef();
  const thirdLink = useRef();
  const forthLink = useRef();
  const {
    handleOnClickAbout, handleOnClickLinkedin, handleOnClickGithub,
    handleOnClickProjects, setIsActiveLogo, isActiveLogo, setIsActiveArrow,
  } = useContext(NewContext);

  const submit = (e) => {
    e.preventDefault();
    const elements = [firstLink.current, secondLink.current, thirdLink.current, forthLink.current];
    const differentElements = elements.filter((element) => element !== e.target);

    const animation = [
      { transform: 'translateX(-25px)' },
      { transform: 'translateX(-50px)' },
      { transform: 'translateX(-50px)', opacity: 0 },
      { transform: 'translateX(-50px)', opacity: 1 },
      { transform: 'translateX(-50px)', opacity: 0 },
      { transform: 'translateX(-50px)', opacity: 1 },
      { transform: 'translateX(-25px)' },
      { transform: 'translateX(0)' },

    ];

    const timing = {
      duration: 1000,
      iterations: 1,
    };
    e.target.animate(animation, timing);
    differentElements.map((links) => {
      const animationRest = [
        { opacity: 0 },
      ];
      setTimeout(() => {
        links.animate(animationRest, { duration: 300 });
      }, [1000]);
      return null;
    });
  };

  return (
    <section className="menu">
      <section className="links">
        <NavLink
          className="first"
          ref={firstLink}
          onClick={(e) => {
            submit(e);
            setTimeout(() => {
              handleOnClickAbout();
              setIsActiveLogo(!isActiveLogo);
            }, [1300]);
          }}
        >
          SOBRE
          {' '}
          <br />
          MIM

        </NavLink>
        <NavLink
          className="second"
          ref={secondLink}
          onClick={(e) => {
            submit(e);
            setTimeout(() => {
              handleOnClickProjects();
              setIsActiveArrow(true);
            }, [1300]);
          }}
        >
          PROJETOS

        </NavLink>
        <NavLink
          className="third"
          ref={thirdLink}
          onClick={(e) => {
            submit(e);
            setTimeout(() => {
              handleOnClickLinkedin();
              window.location.href = 'https://www.linkedin.com/in/valdir-castro10/';
            }, [1300]);
          }}
        >
          LINKEDIN

        </NavLink>
        <NavLink
          className="forth"
          ref={forthLink}
          onClick={(e) => {
            submit(e);
            setTimeout(() => {
              handleOnClickGithub();
              window.location.href = 'https://github.com/valdircaf';
            }, [1300]);
          }}
        >
          GITHUB

        </NavLink>
      </section>
    </section>
  );
}
