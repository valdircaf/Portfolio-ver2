import React from 'react';
import '../../../styles/Components/menuProjects.scss';
import { NavLink } from 'react-router-dom';

export default function MenuProjects() {
  const submit = (e) => {
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
    const time = {
      duration: 1000,
      iterations: 1,
    };
    e.target.animate(animation, time);
  };
  const handleClickNavigate = (to) => {
    setTimeout(() => {
      window.location.href = to;
    }, 1000);
  };

  return (
    <section className="container-menuProjects">
      <section className="links">
        <NavLink onClick={(e) => {
          submit(e);
          handleClickNavigate('https://livechat-hkgu.onrender.com/');
        }}
        >
          Live Chat

        </NavLink>
        <NavLink onClick={(e) => {
          submit(e);
          handleClickNavigate('https://apple-market-liard.vercel.app/');
        }}
        >
          Apple

        </NavLink>
        <NavLink onClick={(e) => {
          submit(e);
          handleClickNavigate('https://daily-weather-app.vercel.app/');
        }}
        >
          Daily Weather

        </NavLink>
        <NavLink onClick={(e) => {
          submit(e);
          handleClickNavigate('https://search-doors.vercel.app/');
        }}
        >
          Search Doors

        </NavLink>
        <NavLink onClick={(e) => {
          submit(e);
          handleClickNavigate('https://passgeneratorportfolio.netlify.app/');
        }}
        >
          Pass Generator

        </NavLink>
        <NavLink onClick={(e) => {
          submit(e);
          handleClickNavigate('https://portfolio-valdircaf.vercel.app/');
        }}
        >
          Portfolio Antigo
        </NavLink>
      </section>
    </section>
  );
}
