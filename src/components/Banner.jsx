import React from 'react'
import {feather} from "feather-icons";
function Banner() {
  return (
    <section
    className="
    dark:bg-slate-900
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      mt-12
      sm:mt-10  pl-10
    "
  >
    <div className="flex flex-col justify-center content-around flex-wrap w-full md:w-1/3 text-left sm:mt-10 pt-10 lg:pt-0">

      <h1
        className="
          font-general-semibold
          text-3xl
          md:text-3xl
          xl:text-4xl
          text-center
          sm:text-left
          text-ternary-dark
          dark:text-white
          uppercase
        "
      >
        Hi, I am Amin
      </h1>
      <p
        className="
          font-general-medium
          mt-2
          text-lg
          sm:text-xl
          xl:text-2xl
          text-center
          sm:text-left
          leading-none
          text-gray-400
        "
      >
        A Full-Stack Developer
      </p>
      <div className="flex justify-center sm:block">

    <div className='flex flex-col gap-3 mt-2 justify-center'>
        <a href="https://github.com/amo2019?tab=repositories"
        className="self-center"
        >
        <img
          src="/assets/icons/github.svg"
          className="h-14 pt-0 hover:opacity-80"
          alt="GitHub Link"
        />
        </a>
        <a
          href="/assets/amin_resume.pdf"
          download=""
          className="
            flex
            justify-center
            items-center
            w-34
            mt-6
            mb-6
            sm:mb-0
            text-lg
            duration-600
          "
          aria-label="Download Resume"
        >
      <div className="b animate-bounce mx-auto h-8 w-24 pt-8 flex justify-center items-center">
        <div className="i h-14 w-48 hover:opacity-90 bg-gradient-to-br from-yellow-500 to-yellow-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform transition duration-900 ease-out">
        </div>
        <div className="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
          <span className="">
          <svg className="w-5 h-5 right-1.5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>Download CV
       </div>
      </div>
    </a>
    </div>
     </div>
    </div>

    <div className="w-full md:w-2/3 text-right float-right">
      <img src="/assets/JavaScript-image.svg" alt="Developer Light" />
    </div>
  </section>
  )
}

export default Banner