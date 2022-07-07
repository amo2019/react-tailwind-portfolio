import React, { useRef, useState } from 'react'
import RelatedProjects, {data} from "./RelatedProjects";
import {projectsData, getters} from "../../store/index";
import { NavLink, useParams } from "react-router-dom";
import MyModal from "../modal/Modal";

function Project() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  const project = getters.getProjectById(id);
  return (
    <>
    <div className="container min-h-[calc(85vh)] mx-auto dark:bg-slate-900">
        {project? (
             <div className='dark:bg-slate-900'>
             <div>
               <p
                 className="
                   font-general-medium
                   text-left text-3xl
                   sm:text-4xl
                   font-bold
                   text-primary-dark
                   dark:text-white
                   mt-14
                   sm:mt-20
                   mb-7
                 "
               >
                 { project.title }
               </p>
               <div className="flex">
                 <div className="flex items-center mr-10">
                   <i
                     data-feather="clock"
                     className="w-4 h-4 text-ternary-dark dark:text-white"
                   ></i>
                   <span
                     className="
                       font-general-medium
                       ml-2
                       leading-none
                       text-primary-dark
                       dark:text-white
                     "
                     >{ project.publishDate }</span
                   >
                 </div>
                 <div className="flex items-center">
                   <i
                     data-feather="tag"
                     className="w-4 h-4 text-ternary-dark dark:text-white"
                   ></i>
                   <span
                     className="
                       font-general-medium
                       ml-2
                       leading-none
                       text-primary-dark
                       dark:text-white
                     "
                     >{project.tag }</span
                   >
                 </div>
               </div>
             </div>
               <RelatedProjects showModal={showModal} id={project.id} setShowModal={setShowModal} setImage={setImage} />
             <div className="block sm:flex gap-0 sm:gap-10 mt-2">
               <div className="w-full sm:w-1/3 text-left">
{/*                  <div className="mb-7">
                  <p
                     className="
                       font-general-medium
                       text-2xl text-secondary-dark
                       dark:text-secondary-light
                       mb-2
                     "
                   >
                     { project.clientTitle }
                   </p>
                    <ul className="leading-loose">
                    {project.companyInfos.map((info)=>{
                      return  (
                    <li
                    key={info.id}
                    className="
                      font-general-regular
                      text-ternary-dark
                      dark:text-white
                    "
                  >
                    <span>{ info.title }: </span>
                    <a
                      href="#"
                      className={
                        info.title == 'Website' || info.title == 'Phone'
                          ? 'hover:underline cursor-pointer'
                          : ''
                      }
                      aria-label="Project website and phone"
                      >{ info.details }</a
                    >
                  </li>
                  )
                    })}
 
                   </ul> 
                 </div>  */}
       
                 <div className="mb-7">
                   <p
                     className="
                       font-general-medium
                       text-2xl text-ternary-dark
                       dark:text-white
                       mb-2
                     "
                   >
                     { project.objectivesTitle }
                   </p>
                   <p
                     className="
                       font-general-regular
                       text-primary-dark
                       dark:text-white
                     "
                   >
                     { project.objectivesDetails }
                   </p>
                 </div>
       
                 <div className="mb-7">
                   <p
                     className="
                       font-general-medium
                       text-2xl text-ternary-dark
                       dark:text-white
                       mb-2
                     "
                   >
                     { project.techTitle }
                   </p>
                   <p
                     className="
                       font-general-regular
                       text-primary-dark
                       dark:text-white
                     "
                   >
                     { project.technologies.join(", ") }
                   </p>
                 </div>
       
                 <div>
                   <p
                     className="
                       font-general-medium
                       text-2xl text-ternary-dark
                       dark:text-white
                       mb-2
                     "
                   >
                     {/* { project.socialTitle } */}
                   </p>
                   <div className="flex items-center gap-3 mt-5">
                    {project.socialSharings.map((social)=>{
                        return (
                        <a
                        key={social.id}
                        href={social.url}
                        target="__blank"
                        aria-label="Share Project"
                        className="
                        bg-white
                        dark:bg-slate-900
                        text-gray-400
                        hover:text-primary-dark
                        dark:hover:text-white
                        p-2
                        rounded-lg
                        shadow-sm
                        duration-500
                        "
                        ><i
                        data-feather="social.icon"
                        className="w-4 lg:w-5 h-4 lg:h-5"
                        ></i
                        ></a>
                        )
                    })}

                   </div>
                 </div>
               </div>
       
               <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                 <p
                   className="
                     font-general-medium
                     text-primary-dark
                     dark:text-white
                     text-2xl
                     font-bold
                     mb-7
                   "
                 >
                   { project.detailsTitle }
                 </p>
                 {project.projectDetails.map((projectDetail)=>{
                    return(
                        <p
                        key={projectDetail.id}
                        className="
                        font-general-regular
                        mb-5
                        text-lg text-ternary-dark
                        dark:text-white
                        "
                    >
                        { projectDetail.details }
                    </p>
                    )
                 })}
              <div className='flex max-w-md items-center justify-around justify-left min-h-fit'>
                    {project.socialSharings.map((projectShare)=>{
                    return(
                    <a href={projectShare.url} className="
                        font-general-regular
                        mb-5
                        text-lg text-ternary-dark
                        dark:text-white
                        "
                        key={projectShare.id}
                        >
                        <div className="b mx-auto justify-around h-8 w-24 flex items-center  text-white hover:text-black">
                          <div className="i h-8 w-24 bg-gradient-to-br from-yellow-400 to-yellow-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                          </div>
                          <p className="text-center font-semibold z-10 pointer-events-none">{ projectShare.name }</p>
                        </div>
                      </a>
                    )
                 })}
                </div>

               </div>
             </div>
          <NavLink to="/#works" className='min-h-fit flex justify-center mb-3'>
           <div className="mt-2 justify-around h-8 w-24 flex items-center  text-black hover:text-white">
               <div className="i h-8 w-24 bg-gradient-to-br from-yellow-400 to-yellow-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
               </div>
               <button  className="text-center font-semibold z-10 pointer-events-none"> Back </button>
           </div>
        </NavLink>
           </div>
        ):(
       <div className="font-general-medium container mx-auto text-center">
         <h1>No projects</h1>
        </div>
        )}
  </div>
  <MyModal visible={showModal} setShowModal={setShowModal} img={image}/>
  </>
  )
}

export default Project