import React from 'react'

export default function Footer() {
  return (
    <div className="w-full bottom-0 bg-white pr-10 z-10 dark:bg-slate-900 border-t-4">
    <div className="container mx-auto py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
      <div className='ring-4 ring-gray-600'>
          <span className='rounded-full pr-1 pl-1 text-yellow-600 font-bold text-2xl from-orange-400'>A</span>
          </div>
          <span className="text-2xl leading-5 font-bold text-gray-600"
            >Portfolio.</span
          >
        </div>
      <span className=" md:block font-medium text-black dark:text-white"
        >© 2022 Portfolio.</span
      >
      <div className="flex justify-around gap-2 ring-amber-200 p-2 ring-2 rounded-md bg-gray-700 hover:bg-gray-800">
        <img className="w-6 cursor-pointer" src="/img/linkedin.png" alt="" />
      </div>
    </div>
  </div>
  )
}
