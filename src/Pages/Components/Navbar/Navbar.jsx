import React, { useContext } from 'react';
import '../../../styles/Components/Navbar.scss';
import { RiSubtractFill } from 'react-icons/ri';
import { BiRectangle } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { NewContext } from '../../../contexts/Context';

export default function Navbar() {
  const {
    setIsActiveMenu, setIsActiveProjects, setIsActiveAbout, setIsActiveLogo,
  } = useContext(NewContext);

  return (
    <section className="navbar">
      <p>C\USERS\VALDIR\cmd.exe</p>
      <section className="interations">
        <RiSubtractFill />
        <BiRectangle />
        <IoClose
          className="close"
          onClick={() => {
            setIsActiveMenu(true);
            setIsActiveProjects(false);
            setIsActiveAbout(false);
            setIsActiveLogo(true);
          }}
        />
      </section>
    </section>
  );
}
