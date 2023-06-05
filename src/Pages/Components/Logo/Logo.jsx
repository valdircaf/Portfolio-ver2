import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/Components/logo.scss';
import { BsArrowLeft } from 'react-icons/bs';
import { NewContext } from '../../../contexts/Context';
import qrCode from '../../../Assets/Images/scan.png';

export default function Logo() {
  const { setIsActiveMenu, setIsActiveProjects, setIsActiveAbout } = useContext(NewContext);

  return (
    <section className="title">
      <NavLink onClick={() => {
        setIsActiveMenu(true);
        setIsActiveProjects(false);
        setIsActiveAbout(false);
      }}
      >
        <h1>valdir</h1>
        <h2>castro</h2>
      </NavLink>
      <h3>Desenvolvedor Frontend</h3>
      <div className="image">
        <img src={qrCode} alt="QR Code for CV" />
        <BsArrowLeft />
        <button
          type="button"
          onClick={() => {
            window.location.href = 'https://drive.google.com/file/d/142gU9dStyx0tDgMJOcI-fl5mykXQxOVv/view?usp=sharing';
          }}
        >
          Baixar meu CV

        </button>
      </div>
    </section>
  );
}
