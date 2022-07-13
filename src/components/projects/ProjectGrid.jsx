import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {projectsData} from '../../store/index'
import ProjectsFilter from './ProjectsFilter';

function ProjectGrid() {
    const navigate = useNavigate()
    const [selectedProject, setSelectedProject] = useState("");
    const [projects, setProjects] = useState(projectsData);
    const [searchProject, setSearchProject] = useState("");

      const filterProjectsByCategory = ()=> {
        return projects.filter((item) => {
          let category =
            item.category.charAt(0).toUpperCase() + item.category.slice(1);
         if(selectedProject === "true" ) return projectsData;
          return category.includes(selectedProject);
        });
      };

      useEffect(() => {
        filterProjectsByCategory()
      },[selectedProject]);

      const filterProjectsBySearch = ()=> {
        let project = new RegExp(searchProject, "i");
        return projects.filter((el) => el.title.match(project));
      };

      const filteredProjects = () => {
        if (selectedProject) {
            return filterProjectsByCategory();
        } else if (searchProject) {
            return filterProjectsBySearch();
        }
        return projects;
    };

      useEffect(() => {
      const filterProjectsBySearch = ()=> {
        let project = new RegExp(searchProject, "i");
        setProjects(projectsData.filter((el) => el.title.match(project)));
        if(searchProject==="") setProjects(projectsData);
      };
      filterProjectsBySearch();
    },[searchProject])

      const  displayProjects = () => {
        return filteredProjects().map(project => {
            return (
              <Link to={`/projects/${project.id}`}
                key={project.id}
                className="
                  rounded-md
                  shadow-lg
                  hover:shadow-xl
                  cursor-pointer
                  mb-10
                  sm:mb-0
                  bg-secondary-light
                  border-solid border-2 border-gray-100
                  p-2
                  dark:bg-slate-900
                "
                aria-label="Single Project"
              >
        <div>
          <div className='flex items-center justify-center min-h-fit'>
           <div
            className="overflow-hidden  aspect-video bg-gray-100 cursor-pointer rounded-xl relative group"
           >
            <div
                className="rounded-md z-10 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
                onClick={()=>navigate(`/projects/${project.id}`)}
            >
                <div>
                    <div
                        className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >   
                       <div className='flex flex-col mix-w-fit flex-wrap'>
                        <div className="font-bold">{project.title}</div>

                        <div className="opacity-60 text-sm ">
                           {project.detailsTitle}
                        </div>
                       </div>
                    </div>
                </div>
            </div>
                  <img
                  src={project.img}
                  alt={project.title}
                  className="min-h-full object-fit cursor-pointer rounded-sm hover:scale-102 transition duration-300 ease-in-out xsm:max-w-min h-auto resize"
                  />
        </div>

                </div>
                  <div className="text-center px-4 py-6">
                    <p
                      className="
                        font-general-semibold
                        text-xl text-ternary-dark
                        dark:text-white
                        font-semibold
                        mb-2
                      "
                    >
                      { project.title }
                    </p>
                    <span
                      className="
                        font-general-medium
                        text-lg text-ternary-dark
                        dark:text-white
                      "
                      >{ project.category }</span
                    >
                  </div>
              </div>
              </Link>
            )
        })
    }

  return (
    <div id="works" className="pt-10 sm:pt-20 md:pt-24 w-full h-full dark:bg-slate-900">
    <div className="text-center">
      <p
        className="
          font-general-semibold
          text-2xl
          sm:text-5xl
          font-semibold
          mb-2
          text-ternary-dark
          dark:text-white
        "
      >
      </p>

    </div>

    <div className="mt-8 sm:mt-10">
      <h1
        className="
          font-general-regular
          text-center  text-yellow-600
          text-2xl
          sm:text-xl
          xl:text-2xl
          mb-4
           dark:bg-slate-900
        "
      >
        My Work
      </h1>
      <h3
        className="
          font-general-regular
          text-center text-secondary-dark
          dark:text-white
          text-md
          sm:text-xl
          font-normal
          mb-4
           dark:bg-slate-900
        "
      >
        Search by title or filter by category
      </h3>
      <div
        className="
          flex flex-col items-center 
          justify-between
          border-b border-primary-light
          dark:border-secondary-dark
          pb-3
          gap-2 lg:flex-row md:flex-row"
        >
        <div className="flex justify-between gap-3 mr-5">
          <span
            className="
              hidden
              sm:block
              bg-primary-light
              dark:bg-slate-900
              p-2
              shadow-sm
              rounded-xl
              cursor-pointer
            "
          >
            <i
              data-feather="search"
              className="text-ternary-dark dark:text-white"
            ></i>
          </span>
          <input
            type="text" 
            value={searchProject} 
            onChange={(e) => setSearchProject(e.target.value)}
            className="
              font-general-medium
              pl-3
              pr-1
              sm:px-2
              py-2
              border-1 border-gray-200
              dark:border-secondary-dark
              rounded-lg
              text-sm
              sm:text-md
              bg-secondary-light
              dark:bg-slate-900
              text-primary-dark
              dark:text-white
              outline-slate-300
            "
            id="name"
            name="name"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>
        <ProjectsFilter setSelectedProject={setSelectedProject}/>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 sm:mr-2 lg:grid-cols-3 mt-6 ml-4 mr-4 sm:gap-10">
        {displayProjects()}

    </div>
  </div>
  )
}

export default ProjectGrid