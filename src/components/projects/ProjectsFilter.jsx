import React, { useState } from 'react'

function ProjectsFilter({setSelectedProject}) {
    const [selectOptions, setSelectOptions ] = useState([
          "Web Application",
          "Mobile Application",
          "UI/UX Design",
        ]);
  return (
    <div className="px-4 flex space-around">
  <select
    onChange={(event)=>{setSelectedProject(event.target.value)}}
    name="select"
    id="select"
    className="
      font-general-medium
      py-2
      border-1 border-gray-200
      dark:border-secondary-dark
      rounded-lg
      text-sm
      sm:text-md
      bg-secondary-light
      dark:bg-slate-900
      text-primary-dark
      dark:text-ternary-light
      outline-slate-300
      px-2
      sm:mr-2
    "
  >
    <option value className="text-md sm:text-sm">All Projects</option>
    {selectOptions.map((option)=>
    <option
      key={option}
      value={option}
      className="sm:text-sm"
    >
      { option }
    </option>
    )}
  </select>
    </div>
  )
}

export default ProjectsFilter
