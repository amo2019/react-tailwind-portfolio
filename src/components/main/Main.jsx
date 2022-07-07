import { Routes, Navigate, Route } from 'react-router-dom';
import Home from './Home';
import Resume from '../Resume';
import Project from '../projects/Project';
export default function Main() {

/*   useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */
  return (
    <div className="mainContent dark:bg-slate-900 pt-1 pb-1">
      <Routes>

          <Route path="/projects/:id" element={<Project />}/>

          <Route path="/resume" element={<Resume />}/>

          <Route path="/"  element={<Home/>}/>

          <Route path="*" element={<Navigate replace to="/" />} />

      </Routes>
    </div>
  );
}