/* eslint-disable */

import { createContext, useState } from 'react';

export const NewContext = createContext();

export const NewContextProvider = ({children})=>{

  const [isActiveAbout, setIsActiveAbout] = useState(false);
  const [isActiveProjects, setIsActiveProjects] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  const [isActiveLinkedin, setIsActiveLinkedin] = useState(false);
  const [isActiveGithub, setIsActiveGithub] = useState(false);
  const [isActiveLogo, setIsActiveLogo] = useState(true);
  const [isActiveArrow, setIsActiveArrow] = useState(false);



  const handleOnClickAbout = ()=>{
    setIsActiveAbout(!isActiveAbout)
    setIsActiveMenu(!isActiveMenu)
  }

  const handleOnClickLinkedin = ()=>{
    setIsActiveLinkedin(!isActiveLinkedin)
    setIsActiveMenu(!isActiveMenu)
  }

  const handleOnClickGithub = ()=>{
    setIsActiveGithub(!isActiveGithub)
    setIsActiveMenu(!isActiveMenu)
  }

  const handleOnClickProjects = ()=>{
    setIsActiveProjects(!isActiveProjects)
    setIsActiveMenu(!isActiveMenu)
  }

  return(

  <NewContext.Provider value={{isActiveMenu, isActiveAbout, isActiveProjects, isActiveLinkedin, isActiveGithub, handleOnClickAbout, handleOnClickProjects, handleOnClickLinkedin, handleOnClickGithub, setIsActiveMenu, setIsActiveProjects, setIsActiveAbout, setIsActiveLogo, isActiveLogo, setIsActiveArrow, isActiveArrow}}>
    {children}
  </NewContext.Provider>

  )

}
