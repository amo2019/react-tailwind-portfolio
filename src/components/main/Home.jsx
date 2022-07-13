import React, {lazy, Suspense} from 'react'
import Spinner from '../spinner/Spinner'
const Banner = lazy(() => import('../Banner')); 
const ContactMe = lazy(() => import('../ContactMe')); 
const ProjectGrid = lazy(() => import('../projects/ProjectGrid')); 
const Resume = lazy(() => import('../Resume')); 


function Home() {
  return (
    <>
   <Suspense fallback={<Spinner />}>
      <Banner />
   </Suspense>
    <Suspense fallback={<Spinner />}>
      <ProjectGrid />
   </Suspense>
    <Suspense fallback={<Spinner />}>
      <Resume />
   </Suspense>
   <Suspense fallback={<Spinner />}>
      <ContactMe />
   </Suspense>
    </>
  )
}

export default Home

