import React from 'react'

function Resume() {
  return (
    <div id="resume" className="dark:bg-slate-900 pt-10 font-sans antialiased w-full">
    <div className=" container mx-auto max-w-screen-2xl">
      <main
        id="wrapper"
        className="flex sm:flex-wrap flex-col sm:flex-row-reverse sm:m-8 shadow-2xl"
      >
        <div
          id="sidebar"
          className="w-full m-auto mt-0 sm:max-w-md p-8  bg-slate-300  dark:bg-slate-600"
        >
          <div className="px-2 pt-4 mt-8 mb-12 ">
            <img
              src="/assets/IMG-AA.webp"
              alt="Profile Picture"
              className="rounded-full w-46 h-48 mx-auto mb-2"
            />
            <h1 className="dark:text-white text-center text-3xl font-semibold mb-2">Amin Amouri</h1>
            <h2 className="dark:text-gray-300 text-center text-xl font-light">Fullstack Developer</h2>
          </div>

          <div className="font-light text-lg px-2 mb-12">
            <h2 className="dark:text-white text-xl font-semibold mb-4">Contact</h2>
            <div className="dark:text-white flex items-center my-3">
              <img
                src="../../assets/mail-outline.svg"
                className="inline w-6 mr-4 dark:text-white"
                alt="Mail icon"
              />
              <a href="mailto:">aminvmail@proton.me</a>
            </div>
            <div className="dark:text-white flex items-center my-3">
              <img
                src="../../assets/call-outline.svg"
                className="inline w-6 mr-4"
                alt="Phone icon"
              />
              <a href="tel:">0151 61041211</a>
            </div>
            <div className="flex items-center my-3">
              <img
                src="../../assets/home-outline.svg"
                className="inline w-6 pb-1 mr-4"
                alt="House icon"
              />
              <div className='dark:text-white'>
                <p>Dresden / Germany</p>
              </div>
            </div>
          </div>

          <div className="dark:text-white font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">On the Web</h2>
            <div className="flex items-center my-3">
              <img
                src="../../assets/logo-github.svg"
                className="inline w-6 mr-4"
                alt="GitHub Logo"
              />
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="flex items-center my-3">
              <img
                src="../../assets/logo-linkedin.svg"
                className="inline w-6 mr-4"
                alt="LinkedIn Logo"
              />
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="flex items-center my-3">
              <img
                src="../../assets/logo-codepen.svg"
                className="inline w-6 mr-4"
                alt="CodePen Logo"
              />
              <a href="#" target="_blank" rel="noopener noreferrer">CodePen</a>
            </div>
            <div className="flex items-center my-3">
              <img
                src="../../assets/globe-outline.svg"
                className="inline w-6 mr-4"
                alt="Globe icon"
              />
              <a href="#" target="_blank" rel="noopener noreferrer"
                >Portfolio</a
              >
            </div>
          </div>

          <div className="dark:text-white font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
            <ul className="list-none">

              <li className='justify-between items-end flex rounded-lg '>
                <label htmlFor="js-skill">JavaScript</label>
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-48">
                <div className=" dark:bg-yellow-500 bg-yellow-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
                </div>
              </li>
              <li className='justify-between items-end flex rounded-lg '>
                <label htmlFor="js-skill">TypeScript</label>
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-48">
                <div className=" dark:bg-yellow-500 bg-yellow-600 h-2.5 rounded-full" style={{width: "70%"}}></div>
                </div>
              </li>
              <li className='justify-between items-end flex '>
                <label htmlFor="react-skill">React</label>
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-48">
                <div className=" dark:bg-yellow-500 bg-yellow-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
                </div>                </li>
              <li className='justify-between items-end flex '>
                <label htmlFor="nextjs-skill">Next.js</label>
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-48">
                <div className=" dark:bg-yellow-500 bg-yellow-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
                </div>                </li>
              <li className='justify-between items-end flex '>
                <label htmlFor="eleventy-skill">Nest.js</label>
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-48">
                <div className=" dark:bg-yellow-500 bg-yellow-600 h-2.5 rounded-full" style={{width: "70%"}}></div>
                </div>                </li>
              <li className='justify-between items-end flex '> 
                <label htmlFor="node-skill">Node / Express</label>
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-48">
                <div className=" dark:bg-yellow-500 bg-yellow-600 h-2.5 rounded-full" style={{width: "90%"}}></div>
                </div>                </li>
              <li className='justify-between items-end flex '>
                <label htmlFor="css-skill">CSS</label>
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-48">
                <div className=" dark:bg-yellow-500 bg-yellow-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
                </div>                </li>
              <li className='justify-between items-end flex '>
                <label htmlFor="design-skill">CoralDraw / Figma</label>
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-48">
                <div className=" dark:bg-yellow-500 bg-yellow-600 h-2.5 rounded-full" style={{width: "50%"}}></div>
                </div>                </li>
              <li>
                <div className='mt-4 text-xl font-semibold'>Infrastructure / Hosting / DB</div>
                <p className="dark:text-black leading-8 flex flex-wrap">
                  <span className="rounded-xl bg-gray-100 px-3 mt-5 mr-2">MongoDB</span>
                  <span className="rounded-xl bg-gray-100 px-3 mt-5 mr-2">PostgreSQL</span>
                  <span className="rounded-xl bg-gray-100 px-3 mt-5 mr-2">AWS</span>
                  <span className="rounded-xl bg-gray-100 px-3 mt-5 mr-2">Vercel</span>
                  <span className="rounded-xl bg-gray-100 px-3 mt-5 mr-2">Heroku</span>
                  <span className="rounded-xl bg-gray-100 px-3 mt-5 mr-2">Netlify</span>
                </p>
              </li>
            </ul>
          </div>

          <div className="dark:text-white font-light text-lg px-2 mb-12">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <h3 className="font-semibold">BSc Computer Science</h3>
            <p className='dark:text-gray'>1999 University of Tripoli</p>
          </div>

          <div className="dark:text-white font-light text-lg px-2 sm-12">
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <h3 className="font-semibold">Arabic</h3>
            <p>Native</p>
            <h3 className="font-semibold">English</h3>
            <p>Fluent</p>
            <h3 className="font-semibold">German</h3>
            <p>Intermediate</p>
          </div>
        </div>
        <div className="dark:text-white content m-auto w-full p-12 md:max-w-2xl">
          <div id="profile" className="prose">
            <h2 className="text-2xl font-bold">Profile</h2>
            <p>
              Hi, I'm a self-taught web developer focusing on the core web
              fundamentals, I have programming experience with different programming languages, 
              in the last four years I focus on JavaScript (front and back-end frameworks) 
              to design and build web applications. 
            </p>
            <p>
              I am highly motivated and work on expanding my horizons day by day.
            </p>
          </div>
          <hr className="mt-8 mb-12" />
          <div id="experience" className="prose">
            <h2 className="text-yellow-600 text-xl font-bold dark:text-yellow-500">Experience</h2>
            <div>
              <h3>Example Inc</h3>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 font-bold">
                  Oct.&nbsp;2018-Jul.&nbsp;2022:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  Fullstack Developer
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 font-bold">
                  Description:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                 During this period I have built a variety of web applications (frontend/backend), 
                 I have used: Vanilla JavaScript, React.js, React-Redux, Node.js, Express-Node.js, Next.js and Nest.js, 
                 in addition to using different Databases such as MongoDB, PostgreSQL, and GraphQL.
                 currently, I am working on a few side projects using React.js, Nest.js, and Next.js.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 font-bold">
                  Tools:
                </div>
                <div className="dark:text-black lg:w-8/12 w-full min-w-fit flex flex-wrap">
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Vanilla JS</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">React.js</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Redux</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Node.js</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Next.js</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Nest.js</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Docker</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">K8s</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">CSS-Tailwind</span>
                </div>
              </section>
            </div>
          </div>
          <hr className="mt-8 mb-12" />
          <div id="projects" className="prose">
            <h2 className="text-yellow-600 text-xl font-bold dark:text-yellow-500">Projects</h2>
            <div className="mb-16">
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 font-bold">
                  Info:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  for more informations please check the links below.
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 font-bold">
                  Portfolio:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <a
                    href="https://myownportfolio.website"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Portfolio</a
                  >
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 font-bold">
                  GetHub:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <a
                    href="https://github.com/amo2019?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    >GitHub</a
                  >
                </div>
              </section>
              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 font-bold">
                  Features:
                </div>
                <div className="lg:inline-block lg:w-8/12 w-full">
                  <ul>
                    <li>- server-side application built with Nest.js and React-TypeScript at frontend</li>
                    <li>- Server-side rendering and generating static websites using Next.js</li>
                    <li>- Frontend applications using React interactive UIs and Redux</li>
                    <li>- lightweight Applications using Vanilla JS</li>
                    <li>- Using different DataBases such as PostgreSQL, MongoDB, Firebase or query Languages such as GraphQL</li>
                    <li>- Progressive web apps (PWAs)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-6">
                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 font-bold">
                  Tools:
                </div>
                <div className="dark:text-black lg:w-8/12 w-full min-w-fit flex flex-wrap">
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">React.js</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">TypeScript</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Next.js</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Nest.js</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Node/Express</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">CSS</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">styled-Components</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">Tailwind</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">MongoDB</span>
                  <span className="rounded-xl bg-gray-300 px-3 mt-2">PostgreSQL</span>
                </div>
              </section>
            </div>
          </div>
          <hr className="mt-8 mb-12" />
          <div id="projects" className="prose">
            <h2 className="text-yellow-600 text-xl font-bold dark:text-yellow-500">Expand my skills</h2>
            <div className="mb-16">
              <h4 id="expand-knowledge-headline">
                Recently I'm working on improving my skills and knowledge in several fields:
              </h4>
              <ul>
                <li>TypeScript</li>
                <li>Testing such as Jest, Cypress</li>
                <li>Design</li>
                <li>Rust</li>
                <li>Angular</li>
                <li>Nuxt</li>
                <li>Svelte</li>
                <li>Databases</li>
                <li>Mobile development</li>
                <li>
                  In addition to eyes on any new updates in the field.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer
      className="dark:text-white mt-12 text-center flex justify-center flex-col md:flex-row mx-12"
    >
      <a
        href=""
        className="dark:text-gray-100 text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0 hover:bg-slate-600 hover:text-white"
        >LinkedIn
      </a>
      <a
        href=""
        className="dark:text-gray-100 text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0 hover:bg-slate-600 hover:text-white"
        >Portfolio
      </a>
      <a
        href=""
        className="dark:text-gray-100 text-sm px-4 py-2 m-2 text-gray-600 border-gray-400 border-2 rounded flex-shrink-0 hover:bg-slate-600 hover:text-white"
        >GitHub
      </a>
    </footer>
  </div>
  )
}

export default Resume