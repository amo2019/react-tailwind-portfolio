import React from 'react'

function ContactMe() {
  return (
    <>
<div id="contact" className="dark:bg-slate-900 max-w-screen-lg mt-48 mb-40 scroll-mt-20 h-full mx-auto p-5">
  <div className="grid grid-cols-1 md:grid-cols-12 border">
    <div className="bg-gray-900 md:col-span-4 p-10 text-white">
      <p className="mt-4 text-sm leading-7 font-regular uppercase">
        Contact
      </p>
      <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
        Get In <span className="text-yellow-600">Touch</span>
      </h3>
      <p className="mt-4 leading-7 text-gray-200">
            Hi There, My approach is to design and create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
            if you are interested to get help building your Web Application,
            or cooperate in the field of web development, I welcome this opportunity to discuss with you further.
      </p>
      
    </div>
  <form className="md:col-span-8 p-10">
  <div className="flex flex-wrap -mx-3 mb-6 lg:p-6 md:p-4">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
      <label className="dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Address
      </label>
      <p className="appearance-none bg-transparent border-b border-yellow-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" aria-label="address">Dresden, Germany</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Email Address:
      </label>
      <p className="appearance-none bg-transparent border-b border-yellow-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" aria-label="email">aminvmail@proton.me</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6 lg:p-6">
    <div className="w-full px-3">
      <label className="dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Phone No.
      </label>
      <p className="appearance-none bg-transparent border-b border-yellow-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" aria-label="phone No.">+49 15161041211</p>
    </div>
  </div>
    
</form>
  </div>
</div>
</>

  )
}

export default ContactMe