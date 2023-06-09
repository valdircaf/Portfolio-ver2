import React, { useContext } from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { CgArrowLeft } from 'react-icons/cg';
import '../../../styles/Components/arrowBack.scss';
import { NewContext } from '../../../contexts/Context';

export default function ArrowBack() {
  const { setIsActiveMenu, setIsActiveProjects, setIsActiveAbout } = useContext(NewContext);
  return (
    <section className="arrowBack">
      <BrowserRouter>
        <NavLink onClick={() => {
          setIsActiveMenu(true);
          setIsActiveProjects(false);
          setIsActiveAbout(false);
        }}
        >
          <CgArrowLeft />

        </NavLink>
      </BrowserRouter>
    </section>
  );
}
