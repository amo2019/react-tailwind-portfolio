import React from 'react'
import {projectsData} from '../../store/index'
import { getters} from "../../store/index";
      
function RelatedProjects({id, setShowModal, setImage}) {
    const project = getters.getProjectById(id);

    const handleClick = (img) => {
      setImage(img);
      setShowModal(true);
    };

  return (
    <div
    className="
      mt-1
      pt-1
      border-t-2 border-white
      dark:border-secondary-dark
    "
  >
    <p
      className="
        font-general-regular
        text-primary-dark
        dark:text-white
        text-3xl
        font-bold
        mb-10
        sm:mb-14
        text-left
      "
    >
      { projectsData.title }
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        {project.projectImages.map((item)=>{
          return  (
          <div className="mb-10 sm:mb-0" onClick={()=>handleClick(item.img)} key={item.id}>
            <img
            src={item.img}
            className="rounded-xl cursor-pointer shadow-lg sm:shadow-none xsm:max-w-min resize h-auto"
            alt={item.title}
            />
           </div>
            )
        })}
    </div>
  </div>
  )
}

export default RelatedProjects
