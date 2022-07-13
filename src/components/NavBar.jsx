import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {ThemeContext} from '../App';
import { useLocation } from 'react-router-dom';

function NavBar() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-yellow-600 transition ease transform duration-300`;
  const genericSideBar = `bg-gray-800 opacity-95 absolute right-0 top-0 p-20 rounded-b-3xl space-y-10 text-white text-center pl-10 pr-10 w-60`;
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [imagelink, setImageLink] = useState(theme?"./img/moon.png":"./img/sun.jpeg");
  useEffect(()=>{
    setImageLink(theme!=="dark"?"./img/moon.png":"./img/sun.jpeg");
  },[theme])
  const handleToggle = ()=>{
    toggleTheme();
  }
  const handleHamburger = ()=>{
    setIsDark(!isDark);
  }
  
  return (
    <div >
    <nav className="w-full fixed top-0 bg-white z-20 dark:bg-slate-900 border-b-2">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
          <div className='ring-4 ring-transparent cursor-pointer relative'>
          <span className="absolute flex h-5 w-5 top-4 right-3 transform translate-x-3 -translate-y-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-45"></span>
          <span className="absolute inline-flex rounded-full h-5 w-5 bg-yellow-500"></span>
      </span>
            <span className='rounded-full pr-1 pl-1 text-yellow-600 font-bold text-2xl from-orange-400'></span>
          </div>          </Link>
          <span className="text-2xl leading-5 font-bold text-gray-600"
            >Portfolio.</span
          >
        </div>
      {(!location.pathname.includes('/resume') && !location.pathname.includes('/projects')) ? (

        <ul
          className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
        >
          <li className="hover:text-gray-500">
            <a href="/#">homepage</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#resume">resume</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#works">works</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#resume">about me</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#contact">contact</a>
          </li>
        </ul>
): (<></>)
      }       
        <img
        id="moon"
        src={imagelink}
        className="md:block w-5 cursor-pointer"
        alt=""
        onClick={handleToggle}
      />
      <div id="hamburger" className={!isDark?"space-y-1 md:hidden cursor-pointer z-20":"space-y-1 cursor-pointer z-20"} onClick={handleHamburger}>
      <button
      className="flex flex-col h-10 w-10  border-black rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-2.5 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
      </div>
        {(!location.pathname.includes('/resume') && !location.pathname.includes('/projects')) ? (
        <ul
          id="menu"
          className={`${genericSideBar} ${
            !isDark
              ? "hidden"
              : ""
          }`}
        >
          <li>
            <Link to="/" className='hover:text-gray-300' id="hLink" onClick={() => {handleHamburger(); setIsOpen(!isOpen)}}>HOMEPAGE</Link>
          </li>
          <li>
            <a className='hover:text-gray-300' id="hLink" href="#resume" onClick={() => {handleHamburger(); setIsOpen(!isOpen)}}>resume</a>
          </li>
          <li>
            <a className='hover:text-gray-300' id="hLink" href="#works" onClick={() => {handleHamburger(); setIsOpen(!isOpen)}}>works</a>
          </li>
          <li>
            <a className='hover:text-gray-300' id="hLink" href="#resume" onClick={() => {handleHamburger(); setIsOpen(!isOpen)}}>about me</a>
          </li>
          <li>
            <a className='hover:text-gray-300' id="hLink" href="#contact" onClick={() => {handleHamburger(); setIsOpen(!isOpen)}}>contact</a>
          </li>
        </ul>):(<ul className={`${genericSideBar} ${
            !isDark
              ? "hidden"
              : ""
          }`}> 
           <li>
            <Link to="/" className='hover:text-gray-300' id="hLink" onClick={() => {handleHamburger(); setIsOpen(!isOpen)}}>HOMEPAGE</Link>
           </li></ul>)}
      </div>
    </nav>
    </div>
  )
}

export default NavBar